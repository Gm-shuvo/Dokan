import React,{useState,useEffect} from 'react'
// eslint-disable-next-line
import { Typography,Grid, InputLabel, Select,MenuItem } from "@material-ui/core";
import { useForm,FormProvider } from "react-hook-form";
import FormInput from './CustomForm'
import { commerce } from "../../../lib/commerce";

const AddressForm = ({checkoutToken}) => {
	const [shippingCountries, setshippingCountries] = useState([])
	const [shippingCountry, setshippingCountry] = useState('')
	const [shippingSubdivisions, setshippingSubdivisions] = useState([])
	const [shippingSubdivision, setshippingSubdivision] = useState('')
	const [shippingOptions, setshippingOptions] = useState([])
	const [shippingOption, setshippingOption] = useState('')

	const methods = useForm()
	
	console.log(checkoutToken.id);
	const fetchShippingCountries = async (checkoutTokenId) =>{
		const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
		console.log(countries);
		setshippingCountries(countries)
	}

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id)
	}, [checkoutToken])

    return (
        <>
        <Typography variant ='h6' gutterBottom>
                Shipping Address  		 
            </Typography>  
            <FormProvider {...methods}>
                <form onSubmit={''}>
                    <Grid container spacing ={4}>
						<FormInput required name='first name' label='First name'/>
						<FormInput required name='Last name' label='Last name'/>
						<FormInput required name='address' label='Address'/>
						<FormInput required name='email' label='Email'/>
						<FormInput required name='city' label='City'/>
						<FormInput required name='zip' label='Zip/Postal code'/>

						{/* <Grid item xs={12 } sm={6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select value={''} fullWidth onChange={''}>
								<MenuItem key={''} value={''}>
									select me
								</MenuItem>
							</Select>
						</Grid> */}
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
