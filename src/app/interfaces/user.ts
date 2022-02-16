
export interface jobInterested {
   id: string,
  name: string,
   isSelected: boolean
}



export interface User {
  name: string,
  dateOfBirth: string,
  phoneNumber: string,
  address?: string,
  jobDescription: string,
  gender: string,
  email: string,
  jobInterestedSelected:string[]
  photo?: File,
  id?: string
}
