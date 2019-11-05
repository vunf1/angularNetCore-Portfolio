/**
 *
 * @version JobDescription_0.1.0
 *   @param jobTitle
 * Array<string | number>
 *   @param date
 * Array<string | number>
 *   @param jobLocal
 * Array<string | number>
 *   @param description
 * Array<string | number>
 *   @param color
 * string
 *   @param id
 * string
 *
 */
export interface JobDescription {
  jobTitle: Array < string | number > ;
  date: Array < string | number > ;
  jobLocal: Array < string | number > ;
  description: Array < string | number > ;
  color: string;
  id: string;
  jobSkills: Array < string | number > ;
}

/**
 *
 * @version NavTitles_1.0.0
 *   @param me
 * Array<data-string | route>
 *   @param about
 * Array<data-string | route>
 *   @param experience
 * Array<data-string | route>
 *   @param education
 * Array<data-string | route>
 *   @param skills
 * Array<data-string | route>
 *   @param interests
 * Array<data-string | route>
 *   @param certifications
 * Array<data-string | route>
 *   @param projects
 * Array<data-string | route>
 *
 */
export interface NavTitles {
  me: Array < string | number  > ;
  about: Array < string | number > ;
  experience: Array < string | number > ;
  education: Array < string | number > ;
  skills: Array < string | number > ;
  interests: Array < string | number > ;
  certifications: Array < string | number > ;
  projects: Array < string | number > ;
}
