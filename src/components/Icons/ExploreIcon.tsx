import {ClickableIconInterface} from "./ClickableIconInterface";

const ExploreIcon = ({size=24, checked}:ClickableIconInterface) => {
    return (
        <svg className={checked ? 'fill-secondary-500': 'fill-greyscale-500'} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM12.5 20C8.09 20 4.5 16.41 4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20ZM7 17.5L14.51 14.01L18 6.5L10.49 9.99L7 17.5ZM12.5 10.9C13.11 10.9 13.6 11.39 13.6 12C13.6 12.61 13.11 13.1 12.5 13.1C11.89 13.1 11.4 12.61 11.4 12C11.4 11.39 11.89 10.9 12.5 10.9Z"/>
        </svg>
    )
}

export default ExploreIcon;