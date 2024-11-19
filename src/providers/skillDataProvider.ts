import SkillDataType from '../types/SkillDataType'

const skillDataProvider = async () => {
	try {
		const { SKILLS_JSON_URL } = process.env
		const skillsData = await fetch(SKILLS_JSON_URL!)
		const skillsDataJson: SkillDataType[] = await skillsData.json()

		return skillsDataJson
	} catch (err) {
		console.error('skillDataProvider', err)

		return []
	}
}

export default skillDataProvider