import React, { ReactNode } from "react";
import { BiUser } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { RiSuitcaseLine } from "react-icons/ri"

import { InfoSectionProps, SectionName, User, Address, Company } from "../../utils/types";
import './InfoSection.scss';


const InfoSection: React.FC<InfoSectionProps> = ({ sectionName, user }) => {

    const remove_entries = ["id", "address", "company", "geo", "bs"]

    const getEntries = (object: User | Address | Company) => {
        let entries = []
        for (const [key, value] of Object.entries(object)) {
            if (!remove_entries.includes(key)) {
                const entry_key = key.charAt(0).toUpperCase() + key.slice(1);
                entries.push(renderSectionLine(entry_key.toString(), value.toString()))
            }
        }
        return entries;
    }

    const renderSectionLine = (key: string, value: string) => {
        return (
            <span className="field">
                <span className="fieldName">{key}: </span>
                {value}
            </span>
        )
    }

    const getIconAndEntires = (): { icon: ReactNode, entries: object } => {
        switch (sectionName) {
            case SectionName.UserInfo:
                return { icon: <BiUser className="icon" />, entries: getEntries(user) }
            case SectionName.Address:
                return { icon: <CiHome className="icon" />, entries: getEntries(user.address) }
            case SectionName.Company:
                return { icon: <RiSuitcaseLine className="icon" />, entries: getEntries(user.company) }
            default:
                return { icon: <></>, entries: {} }
        }
    }

    const renderSection = () => {
        const { icon, entries } = getIconAndEntires();
        return (
            <>
                <p className="sectionTitle">
                    {icon}
                    {sectionName}
                </p>
                {entries}
            </>
        )
    }

    return <div className="infoSection">
        {renderSection()}
    </div>
};

export default InfoSection;