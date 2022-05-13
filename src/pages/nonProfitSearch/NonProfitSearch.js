import React from 'react';
/* CSS */
import './nonProfitSearch.css';
/* MUI */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FooterTest from '../../components/FooterTest/FooterTest';

export default function NonProfitSearch() {
	const img = 'url(./img/non-profit/nonProfitHero.png)';

	return (
		<div className="nonProfit-search-container">
			<header
				style={{
					backgroundImage      : img,
					backgroundPosition   : 'center',
					backgroundRepeat     : 'no-repeat',
					backgroundSize       : 'cover',
					backgroundAttachment : 'fixed'
				}}
				className="nonProfit-search-hero"
			>
				<ButtonAppBar />
				<div className="nonProfit-search-hero-text">
					<h1>Carefully curated</h1>
					<h1>Non-profits</h1>
					<p>We have selected a number of non-profits</p>
					<p>that suits your business strategy.</p>
				</div>
			</header>
			<main className="nonProfit-search-categories">
				<h3>Categories of Non-profits</h3>
			</main>
			<FooterTest />
		</div>
	);
}

const Search = styled('div')(({ theme }) => ({
	position                     : 'relative',
	borderRadius                 : 50,
	backgroundColor              : alpha(theme.palette.common.white, 0.15),
	'&:hover'                    : {
		backgroundColor : alpha(theme.palette.common.white, 0.25)
	},
	[theme.breakpoints.up('sm')]: {
		marginLeft : theme.spacing(1),
		width      : '50%'
	}
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding        : theme.spacing(0, 2),
	height         : '100%',
	position       : 'absolute',
	pointerEvents  : 'none',
	display        : 'flex',
	alignItems     : 'center',
	justifyContent : 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color                   : 'inherit',
	'& .MuiInputBase-input' : {
		padding     : theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft : `calc(1em + ${theme.spacing(4)})`,
		transition  : theme.transitions.create('width'),
		width       : '100%'
		/*
    //Animation on search input 
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    */
	}
}));

function ButtonAppBar() {
	return (
		<AppBar style={{ backgroundColor: 'transparent' }} position="static">
			<Toolbar className="nonProfit-search-navbar">
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
					<MenuIcon />
					<PersonIcon />
				</IconButton>

				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
				</Search>

				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
					<div className="nonprofit-firma-name">
						<h5>Meliora</h5>
						<h5>Impact</h5>
					</div>
					<img src="./img/MI-logo-white.png" alt="logo-pic-login" />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
