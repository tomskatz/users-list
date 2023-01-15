
export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company

}

export type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo,
}

type Geo = {
    lat: string,
    lng: string,
}

export type Company = {
    name: string,
    catchPhrase: string,
    bs: string,
}

export type UserCardProps = {
    user: User
}

export type InfoSectionProps = {
    sectionName: string
    user: User
}

export enum SectionName {
    UserInfo = 'User Info',
    Address = 'Address',
    Company = 'Company'
}

export type UsersListContextProps = {
    users: User[],
    userId: Number | null,
    setUserId: Function
}
