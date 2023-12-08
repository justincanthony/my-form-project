import { TextFieldElement, FormContainer } from "react-hook-form-mui";

// interface IntakeFormFields {
//     firstName: string;
//     lastName: string;
//     primaryContactEmail: string;
//     primaryContactPhoneNumber: string;
//     age: number;
//     isFullMember: boolean;
//     isPrivateTrainingDesired: boolean;
//     isClassTrainingDesired: boolean;
//     trainingDays: string[];
//     trainerRequested: string;
//     preferredTimeOfTraining: string;
//     isActivePromotionalSubscriber: boolean;

// }

const IntakeForm: React.FC = () => {

return (
    <FormContainer
        defaultValues={{
            firstName: "",
            lastName: "", 
            primaryContactEmail: "",
            primaryContactPhoneNumber: "",
            age: "",
            isFullMember: false,
            isPrivateTrainingDesired: false,
            isClassTrainingDesired: false,
            trainingDays: ["Sunday"],
            trainerRequested: "",
            preferredTimeOfTraining: "",
            isActivePromotionalSubscriber: true,
        }}
        onSuccess={data => console.log(data)}
    >
        <TextFieldElement name="firstName" label="First Name" required />
        <TextFieldElement name="lastName" label="Last Name" required />


    </FormContainer>
)

}

export default IntakeForm;