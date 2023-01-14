import React from "react";
import { styles } from "../utils/styles";
import { User } from "../utils/types";
import {BiUser} from "react-icons/bi";
import {CiHome} from "react-icons/ci";
import {RiSuitcaseLine} from "react-icons/ri"

type InfoSectionProps = {
    sectionName: string
    user: User
}

enum SectionName {
    UserInfo = 'User Info',
    Address = 'Address',
    Company = 'Company'
}

const InfoSection: React.FC<InfoSectionProps> = ({sectionName, user}) => {
    const renderSectionLine = (propertyName: string, propertyValue: string) => {
        return (
            <p>
                <span style={styles.UserInfo.FieldName}>{propertyName}: </span>
                <span>{propertyValue}</span>
            </p>
        )
    }    
    const renderSection = () => {
        switch(sectionName) {
            case SectionName.UserInfo: {
                return (
                    <>
                        <p style={styles.UserInfo.SectionTitle}>
                            <BiUser/> {sectionName}
                        </p>
                        {renderSectionLine('Name', user.name)}
                        {renderSectionLine('Userame', user.username)}
                        {renderSectionLine('Phone', user.phone)}
                        {renderSectionLine('Email', user.email)}
                        {renderSectionLine('Website', user.website)}
                    </>
                )
            }
            case SectionName.Address: {
                return (
                    <>
                        <p style={styles.UserInfo.SectionTitle}>
                            <CiHome/> {sectionName}
                        </p>
                        {renderSectionLine('Street', user.address.street)}
                        {renderSectionLine('Suite', user.address.suite)}
                        {renderSectionLine('City', user.address.city)}
                        {renderSectionLine('Zipcode', user.address.zipcode)}
                    </>
                )
            }
            case SectionName.Company: {
                return (
                    <>
                        <p style={styles.UserInfo.SectionTitle}>
                            <RiSuitcaseLine/> {sectionName}
                        </p>                    
                        {renderSectionLine('Name', user.company.name)}
                        {renderSectionLine('CatchPhrase', user.company.catchPhrase)}
                </>
                )
            }
        }
    }
    return <>
        <div style={styles.UserInfo.Section}>
            {renderSection()}
        </div>
    </>
};

export default InfoSection;