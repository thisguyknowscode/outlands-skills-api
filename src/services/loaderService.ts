import { provideEmbedding } from '../providers/embeddingProvider'
import skillDataProvider from '../providers/skillDataProvider'
import { upsertData } from '../providers/vectorProvider'
import SkillDataType from '../types/SkillDataType'
import UpsertDataType from '../types/UpsertDataType'

const loaderService = async () => {
	const skillDataMapper = async (skillDataItem: SkillDataType) => {
		return {
			id: skillDataItem.skillTitle,
			values: await provideEmbedding(skillDataItem.skillText),
			metadata: {
				title: skillDataItem.skillTitle,
				description: skillDataItem.skillText,
			}
		}
	}

	const skillData: SkillDataType[] = await skillDataProvider()

	const loadableSkillData: Promise<UpsertDataType>[] = skillData.map(skillDataMapper)

	const loadableSkills = await Promise.all(loadableSkillData)

	await upsertData(loadableSkills)
}

export default loaderService