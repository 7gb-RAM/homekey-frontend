import { useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom";


const RoleSelector = () => {
    const {user} = useUser();
    const navigate = useNavigate();
    const handleRoleSelection = async (selectedRole) => {
        try {
            // logic of selection
            const existingRoles = user.unsafeMetadata.roles || [];
            if (!existingRoles.includes(selectedRole)) {
                await user.update({
                    unsafeMetadata: {
                        roles: [...existingRoles, selectedRole],
                    },
                });
            }
            // Redirect to the dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error("Error updating user role", error);
        }
    }
    return (
        <div>
          <h1>Select Your Role</h1>
          <button onClick={() => handleRoleSelection('buyer')}>Buyer</button>
          <button onClick={() => handleRoleSelection('seller')}>Seller</button>
          {/* <button onClick={() => handleRoleSelection('fsh')}>FSH</button> */}
        </div>
    );
}

export default RoleSelector;