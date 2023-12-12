import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { TextFieldElement, FormContainer, CheckboxElement, SwitchElement, ToggleButtonGroupElement, useForm } from "react-hook-form-mui";

interface IntakeFormFields {
    firstName: string;
    lastName: string;
    primaryContactEmail: string;
    primaryContactPhoneNumber: string;
    age: number | string;
    isFullMember: boolean;
    isPrivateTrainingDesired: boolean;
    trainingDays?: string[];
    trainerRequested: string;
    preferredTimeOfTraining: string;
    isActivePromotionalSubscriber: boolean;

}

const daysOfWeekOptions: {id: string, label: string}[] = [
    {
        id: 'sunday',
        label: 'SUN'
    },
    {
        id: 'monday',
        label: 'MON'
    },
    {
        id: 'tuesday',
        label: 'TUE'
    },
    {
        id: 'wednesday',
        label: 'WED'
    },
    {
        id: 'thursday',
        label: 'THU'
    },
    {
        id: 'friday',
        label: 'FRI'
    },
    {
        id: 'saturday',
        label: 'SAT'
    },
]



const IntakeForm: React.FC = () => {
    const { control, watch } = useForm();
    const watchPrivateTraining = watch("isPrivateTrainingDesired");
    


    
return (
    
    <FormContainer<IntakeFormFields>
        defaultValues={{
            firstName: "",
            lastName: "", 
            primaryContactEmail: "",
            primaryContactPhoneNumber: "",
            age: "",
            trainingDays: [],
            isPrivateTrainingDesired: false,
            trainerRequested: "",
            preferredTimeOfTraining: "",
            isActivePromotionalSubscriber: true,
        }}
        mode={'onChange'}
        onSuccess={data => console.log(data)}
        // formContext={useFormContex}
    >
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
            <Grid item xs={12}>
                <Typography variant="h2">New Member Form</Typography>
            </Grid> 
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">Member Information</Typography>
            </Grid> 
            <Grid item xs={12}>
                <TextFieldElement name="firstName" label="First Name" required />
            </Grid>
            <Grid item xs={12}>
                <TextFieldElement name="lastName" label="Last Name" required />
            </Grid>
            <Grid item xs={12}>
                <TextFieldElement name="age" label="Age" required />
            </Grid>
            <Grid item xs={12}>
                <TextFieldElement name="primaryContactEmail" label="Email" required />
            </Grid>
            
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">Training Plan</Typography>
            </Grid> 
           
            <Grid item xs={12}>
                <SwitchElement control={control} name="isPrivateTrainingDesired" label="Private Training" />
            </Grid>
            <Grid item xs={12}>
                {watchPrivateTraining && <ToggleButtonGroupElement name="trainingDays" label="Please select desired training days"  options={daysOfWeekOptions} disabled={!watchPrivateTraining}/>}
            </Grid>
            <Grid item xs={12}>
                <CheckboxElement name="isActivePromotionalSubscriber" label="Would like to recieve information about our promotional offerings?" />
            </Grid>
            <Grid item xs={12}>
                <Stack direction={'row'} spacing={2}>
                    <Button type={'submit'} color={'primary'}>
                        {' '}
                        Submit
                    </Button>
                </Stack>
            </Grid>
        </Grid>

    </FormContainer>
)

}

export default IntakeForm;