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
	const countries = Object.entries(shippingCountries).map(([code,name])=>({id:code ,label:name})) 
	const subdivisions = Object.entries(shippingSubdivisions).map(([code,name])=>({id:code ,label:name})) 
	//console.log(checkoutToken.id);
	// const Options = shippingOptions.map((option)=>)

	const fetchShippingCountries = async (checkoutTokenId) =>{
		try {
			const {countries} = await commerce.services.localeListCountries(checkoutTokenId)
			//console.log(countries);
			setshippingCountries(countries)
		} catch (error) {
			console.log({message:'Fechting Countries error'});
		}
	}


	const fetchingShippingSubdivisions =async(shippingCountry)=>{
		try {
			const {subdivisions}= await commerce.services.localeListSubdivisions(shippingCountry)
			//console.log(subdivisions);
			setshippingSubdivisions(subdivisions)
		} catch (error) {
			console.log({message:'Fechting Subdivisions of Country error'});
		}
	}
	const fetchingShippingOptions =async(checkoutTokenId,country = 'US')=>{
		try {
			const Options = await commerce.checkout.getShippingOptions(checkoutTokenId,{country})
			console.log(Options);
			setshippingOptions(Options)
		} catch (error) {
			console.log({message:'Fechting ShippingOptions of Country error'});
		}
	}
	console.log(shippingCountry);
	useEffect(() => {
		fetchShippingCountries(checkoutToken.id)
	}, [])
	
	useEffect(() => {
		fetchingShippingSubdivisions(shippingCountry)
	}, [shippingCountry])

	useEffect(() => {
		if(shippingSubdivision)	fetchingShippingOptions(checkoutToken.id)
	}, [shippingSubdivision])

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

						<Grid item xs={12 } sm={6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select value={shippingCountry} fullWidth onChange={(e)=>setshippingCountry(e.target.value)}>
								{countries.map((country)=>(
									<MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>
								))}
							</Select>
						</Grid>
						<Grid item xs={12 } sm={6}>
							<InputLabel>Shipping Subdivisions</InputLabel>
							<Select value={shippingSubdivision} fullWidth onChange={(e)=>setshippingSubdivision(e.target.value)}>
								{subdivisions.map((division)=>(
									<MenuItem key={division.id} value={division.id}>{division.label}</MenuItem>
								))}
							</Select>
						</Grid>

						{/* <Grid item xs={12 } sm={6}>
							<InputLabel>Shipping Subdivisions</InputLabel>
							<Select value={shippingSubdivision} fullWidth onChange={(e)=>setshippingSubdivision(e.target.value)}>
								{subdivisions.map((division)=>(
									<MenuItem key={division.id} value={division.id}>{division.label}</MenuItem>
								))}
							</Select>
						</Grid> */}
						
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
