
const App: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    margin: "36px"
}

const Title = {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#6b6f77",
    textDecoration: "none" 
}

const Breadcrumbs = {
    display: "flex", 
    alignItems: "center", 
    alignContent: "center", 
    gap:"8px"
}

const Divider = {
    backgroundColor: "#dde0e4", 
    height: "1px"
}

const SubTitle = {
    fontSize: "20px",
    color: "#80b9c5",
}

const List: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "32px"
}

const Box: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "25px" ,
    backgroundColor: "white",
    height: "200px",
    width: "200px",
    borderColor: "#c5cacd",
    boxShadow: "0 0 10px #c5cacd"
}

const Initiales: React.CSSProperties = {
    display: "flex",
    fontSize: "32px",
    backgroundColor: "#f5f8fb",
    borderRadius: "50%",
    margin: "inherit",
    padding: "16px",
    color: "#a8afb8"
}

const NameLine: React.CSSProperties = {
    display: "flex",
    fontWeight: "bold",
}

const EmailLine: React.CSSProperties = {
    color:  "#caccd8"
}

const NameAndEmail: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    
}

const UserPreview = {
    Box: Box,
    Initiales: Initiales,
    NameLine: NameLine,
    EmailLine: EmailLine,
    NameAndEmail: NameAndEmail
}

const Section: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
}

const SectionTitle: React.CSSProperties = {
    display: "flex",
    fontSize: "20px",
    color: "#5f949f"
}

const FieldName: React.CSSProperties = {
    fontWeight: "bold"
}

const NavigationTitle : React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between"
}

const UserInfo = {
    Section: Section,
    SectionTitle: SectionTitle,
    FieldName: FieldName,
    NavigationTitle: NavigationTitle
}

const Button: React.CSSProperties = {
    backgroundColor: "#6daebd",
    borderRadius: "5px" ,
    border: "5px",
    color: "white",
}

export const styles = {
    App: App,
    Title: Title,
    Breadcrumbs: Breadcrumbs,
    Divider: Divider,
    SubTitle: SubTitle,
    List: List,
    UserPreview: UserPreview,
    Button: Button,
    UserInfo: UserInfo
}