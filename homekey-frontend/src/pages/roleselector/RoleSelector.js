import { useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom";


const RoleSelector = () => {
    const {user} = useUser();
    const navigate = useNavigate();
    const handleRoleSelection = async (selectedRole) => {
        try {
            // logic of selection
        } catch (error) {
            console.error("Error updating user role", error);
        }
    }
}