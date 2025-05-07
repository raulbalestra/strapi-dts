import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_heroes';
  info: {
    displayName: 'AboutHero';
  };
  attributes: {
    heading: Schema.Attribute.Component<'assets.cyclic-text', true>;
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface AboutUsCardProps extends Struct.ComponentSchema {
  collectionName: 'components_about_us_card_props';
  info: {
    displayName: 'CardProps';
  };
  attributes: {
    designation: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    name: Schema.Attribute.String;
    teamImage: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutUsOurStory extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_stories';
  info: {
    description: '';
    displayName: 'OurStory';
  };
  attributes: {
    heading: Schema.Attribute.String;
    iconCards: Schema.Attribute.Component<'components.icon-card', true>;
    primaryText: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
  };
}

export interface AboutUsOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_teams';
  info: {
    description: '';
    displayName: 'OurTeam';
  };
  attributes: {
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    cards: Schema.Attribute.Component<'about-us.card-props', true>;
    heading: Schema.Attribute.Text;
    primaryText: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
  };
}

export interface AirportPageAirportHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_airport_heroes';
  info: {
    description: '';
    displayName: 'AirportHero';
  };
  attributes: {
    buttons: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    cyclicText: Schema.Attribute.Component<'assets.cyclic-text', true> &
      Schema.Attribute.Required;
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    notificationCard: Schema.Attribute.Component<'assets.icon-text', false> &
      Schema.Attribute.Required;
    primaryText: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryButtons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
  };
}

export interface AirportPageBestService extends Struct.ComponentSchema {
  collectionName: 'components_sections_best_services';
  info: {
    description: '';
    displayName: 'BestService';
  };
  attributes: {
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    cards: Schema.Attribute.Component<'components.text-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCardDesktopImage: Schema.Attribute.Media<'images'>;
    secondaryCardHeading: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCardMobileImage: Schema.Attribute.Media<'images'>;
    secondaryCardPrimaryText: Schema.Attribute.String;
    secondaryCardSubTitle: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    videoSrc: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface AirportPageBookingEasy extends Struct.ComponentSchema {
  collectionName: 'components_airport_page_booking_easies';
  info: {
    description: '';
    displayName: 'BookingEasy';
  };
  attributes: {
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    cards: Schema.Attribute.Component<'assets.icon-text', true> &
      Schema.Attribute.Required;
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    iconCards: Schema.Attribute.Component<'components.icon-card', true>;
    mobileImage: Schema.Attribute.Media<'images'>;
    primaryText: Schema.Attribute.Text & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AirportPageGoogleReviews extends Struct.ComponentSchema {
  collectionName: 'components_airport_page_google_reviews';
  info: {
    description: '';
    displayName: 'GoogleReviews';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    primaryButton: Schema.Attribute.String & Schema.Attribute.Required;
    primaryText: Schema.Attribute.Text & Schema.Attribute.Required;
    revienwCount: Schema.Attribute.Integer & Schema.Attribute.Required;
    reviewCards: Schema.Attribute.Component<'components.ratings-card', true>;
    reviewNumber: Schema.Attribute.Decimal & Schema.Attribute.Required;
    secondaryButton: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AirportPageServingAround extends Struct.ComponentSchema {
  collectionName: 'components_sections_serving_around';
  info: {
    description: '';
    displayName: 'ServingAround';
  };
  attributes: {
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    finePrint: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    locations: Schema.Attribute.Component<'components.location-card', true>;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AirportPageTravelAgent extends Struct.ComponentSchema {
  collectionName: 'components_airport_page_travel_agents';
  info: {
    displayName: 'TravelAgent';
  };
  attributes: {
    heading: Schema.Attribute.String;
    list: Schema.Attribute.Component<'assets.list-items', true>;
    primaryText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
  };
}

export interface AssetsBarCard extends Struct.ComponentSchema {
  collectionName: 'components_assets_bar_cards';
  info: {
    displayName: 'barCard';
  };
  attributes: {
    colorText1: Schema.Attribute.String;
    colorText2: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AssetsCyclicText extends Struct.ComponentSchema {
  collectionName: 'components_assets_cyclic_texts';
  info: {
    displayName: 'CyclicText';
  };
  attributes: {
    txt: Schema.Attribute.String;
  };
}

export interface AssetsDoubleText extends Struct.ComponentSchema {
  collectionName: 'components_assets_double_texts';
  info: {
    displayName: 'double text';
  };
  attributes: {
    lat: Schema.Attribute.String;
    lng: Schema.Attribute.String;
  };
}

export interface AssetsHederButton extends Struct.ComponentSchema {
  collectionName: 'components_assets_heder_buttons';
  info: {
    displayName: 'HederButton';
  };
  attributes: {
    ctas: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
  };
}

export interface AssetsIconLink extends Struct.ComponentSchema {
  collectionName: 'components_assets_icon_links';
  info: {
    description: '';
    displayName: 'IconLink';
  };
  attributes: {
    iconName: Schema.Attribute.Enumeration<
      [
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AssetsIconText extends Struct.ComponentSchema {
  collectionName: 'components_assets_icon_texts';
  info: {
    description: '';
    displayName: 'IconText';
  };
  attributes: {
    iconName: Schema.Attribute.Enumeration<
      [
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
    text: Schema.Attribute.String;
  };
}

export interface AssetsIconTextLink extends Struct.ComponentSchema {
  collectionName: 'components_assets_icon_text_links';
  info: {
    description: '';
    displayName: 'IconTextLink';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
    tag: Schema.Attribute.Enumeration<['button', 'a']>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AssetsImgTxtCard extends Struct.ComponentSchema {
  collectionName: 'components_assets_img_txt_cards';
  info: {
    description: '';
    displayName: 'ImgTxtCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface AssetsList extends Struct.ComponentSchema {
  collectionName: 'components_assets_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface AssetsListItems extends Struct.ComponentSchema {
  collectionName: 'components_assets_list_items';
  info: {
    displayName: 'listItems';
  };
  attributes: {
    href: Schema.Attribute.String;
    iconName: Schema.Attribute.Enumeration<['CheckMarkIcon']>;
    label: Schema.Attribute.String;
    primaryText: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface AssetsTextLink extends Struct.ComponentSchema {
  collectionName: 'components_assets_text_links';
  info: {
    description: '';
    displayName: 'TextLink';
  };
  attributes: {
    iconName: Schema.Attribute.Enumeration<
      [
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
        'YoutubeLogoIcon',
      ]
    >;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AssetsUrlLink extends Struct.ComponentSchema {
  collectionName: 'components_assets_url_links';
  info: {
    displayName: 'UrlLink';
  };
  attributes: {
    color: Schema.Attribute.String;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface BlocksAppAndPortalCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_app_and_portal_cards';
  info: {
    description: '';
    displayName: 'AppPortalCard';
  };
  attributes: {
    ctas: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    description: Schema.Attribute.Text;
    desktopImage: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    mobileImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksConciergeCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_concierge_cards';
  info: {
    description: '';
    displayName: 'ConciergeCard';
  };
  attributes: {
    concierge_cards: Schema.Attribute.Relation<
      'oneToMany',
      'api::concierge-card.concierge-card'
    >;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFooter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    category: Schema.Attribute.String;
    links: Schema.Attribute.Component<'assets.text-link', true>;
    name: Schema.Attribute.String;
  };
}

export interface BlocksMobileAppAndContact extends Struct.ComponentSchema {
  collectionName: 'components_blocks_mobile_app_and_contacts';
  info: {
    description: '';
    displayName: 'MobileAppContact';
  };
  attributes: {
    ctas: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSlides extends Struct.ComponentSchema {
  collectionName: 'components_blocks_slides';
  info: {
    displayName: 'Slides';
  };
  attributes: {};
}

export interface BlogPageBlogPage extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_blog_pages';
  info: {
    description: '';
    displayName: 'BlogPage';
  };
  attributes: {
    blogCards: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    featureCard: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    heading: Schema.Attribute.String;
    primaryText: Schema.Attribute.String;
    selectLabel: Schema.Attribute.String;
  };
}

export interface BlogPageRecentArticle extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_recent_articles';
  info: {
    description: '';
    displayName: 'RecentArticle';
  };
  attributes: {
    blogCard: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    heading: Schema.Attribute.String;
    pagination: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
  };
}

export interface BlogPageSignupLetter extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_signup_letters';
  info: {
    displayName: 'SignupLetter';
  };
  attributes: {
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    primaryText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
  };
}

export interface CareerCareerHero extends Struct.ComponentSchema {
  collectionName: 'components_career_career_heroes';
  info: {
    displayName: 'CareerHero';
  };
  attributes: {
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    heading: Schema.Attribute.Component<'assets.cyclic-text', true>;
    images: Schema.Attribute.Media<'images', true>;
    primaryText: Schema.Attribute.Text;
  };
}

export interface CareerJobDetails extends Struct.ComponentSchema {
  collectionName: 'components_career_job_details';
  info: {
    description: '';
    displayName: 'JobDetails';
  };
  attributes: {
    heading: Schema.Attribute.String;
    listItems: Schema.Attribute.Component<'assets.cyclic-text', true>;
    primaryText: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<['paragraph', 'bullet']> &
      Schema.Attribute.Required;
  };
}

export interface CareerOpenRoles extends Struct.ComponentSchema {
  collectionName: 'components_career_open_roles';
  info: {
    displayName: 'OpenRoles';
  };
  attributes: {
    heading: Schema.Attribute.String;
    primaryText: Schema.Attribute.Text;
    selectLabel: Schema.Attribute.String;
  };
}

export interface CareerPerks extends Struct.ComponentSchema {
  collectionName: 'components_career_perks';
  info: {
    displayName: 'Perks';
  };
  attributes: {
    cards: Schema.Attribute.Component<'components.icon-card', true>;
    heading: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
  };
}

export interface CitySectionCitySection extends Struct.ComponentSchema {
  collectionName: 'components_city_section_city_sections';
  info: {
    description: '';
    displayName: 'BookingEasy';
  };
  attributes: {
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    cards: Schema.Attribute.Component<'components.notification-card', true> &
      Schema.Attribute.Required;
    cardsPostion: Schema.Attribute.Enumeration<['Left', 'Right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Left'>;
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    iconCards: Schema.Attribute.Component<'components.icon-card', true>;
    mobileImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    primaryText: Schema.Attribute.Text & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHeaderLink extends Struct.ComponentSchema {
  collectionName: 'components_components_header_links';
  info: {
    description: '';
    displayName: 'HeaderLink';
  };
  attributes: {
    color: Schema.Attribute.String;
    list: Schema.Attribute.Component<'assets.text-link', true>;
    position: Schema.Attribute.String;
    text: Schema.Attribute.String;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsHeroCard extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_cards';
  info: {
    description: '';
    displayName: 'HeroCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconName: Schema.Attribute.Enumeration<
      [
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsIconCard extends Struct.ComponentSchema {
  collectionName: 'components_components_icon_cards';
  info: {
    description: '';
    displayName: 'IconCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      [
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
  };
}

export interface ComponentsIconTextCard extends Struct.ComponentSchema {
  collectionName: 'components_components_icon_text_cards';
  info: {
    description: '';
    displayName: 'IconTextCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    iconName: Schema.Attribute.Enumeration<
      [
        'AvailabilityIcon',
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
    text: Schema.Attribute.Text;
  };
}

export interface ComponentsImageCard extends Struct.ComponentSchema {
  collectionName: 'components_components_image_cards';
  info: {
    description: '';
    displayName: 'ServicesCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_components_info_cards';
  info: {
    description: '';
    displayName: 'infoCard';
  };
  attributes: {
    cta: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    iconName: Schema.Attribute.Enumeration<
      [
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
    text: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface ComponentsInformationCard extends Struct.ComponentSchema {
  collectionName: 'components_components_information_cards';
  info: {
    displayName: 'InformationCard';
  };
  attributes: {
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    primaryText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
  };
}

export interface ComponentsLocationCard extends Struct.ComponentSchema {
  collectionName: 'components_components_location_cards';
  info: {
    description: '';
    displayName: 'LocationCard';
  };
  attributes: {
    destination: Schema.Attribute.String;
    distance: Schema.Attribute.String;
    price: Schema.Attribute.String;
    source: Schema.Attribute.String;
  };
}

export interface ComponentsNotificationCard extends Struct.ComponentSchema {
  collectionName: 'components_components_notification_cards';
  info: {
    description: '';
    displayName: 'NotificationCard';
  };
  attributes: {
    iconName: Schema.Attribute.Enumeration<
      [
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
    primaryText: Schema.Attribute.String;
    secondaryText: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface ComponentsOurProductCard extends Struct.ComponentSchema {
  collectionName: 'components_components_our_product_cards';
  info: {
    displayName: 'OurProductCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsPerspectiveTab extends Struct.ComponentSchema {
  collectionName: 'components_components_perspective_tabs';
  info: {
    displayName: 'PerspectiveTab';
  };
  attributes: {
    heading: Schema.Attribute.String;
    iconName: Schema.Attribute.Enumeration<
      [
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsRatingsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_ratings_cards';
  info: {
    description: '';
    displayName: 'RatingsCard';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    starRatingNumber: Schema.Attribute.Integer;
    text: Schema.Attribute.String;
    time: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsSupplierCard extends Struct.ComponentSchema {
  collectionName: 'components_components_supplier_cards';
  info: {
    description: '';
    displayName: 'SupplierCard';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonial_cards';
  info: {
    description: '';
    displayName: 'TestimonialCard';
  };
  attributes: {
    author: Schema.Attribute.String;
    cardType: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String;
    stat: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface ComponentsTextCard extends Struct.ComponentSchema {
  collectionName: 'components_components_text_cards';
  info: {
    description: '';
    displayName: 'TextCard';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    primaryText: Schema.Attribute.Text & Schema.Attribute.Required;
    smallText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactPageContactUsMap extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_contact_us_maps';
  info: {
    displayName: 'ContactUsMap';
  };
  attributes: {
    address: Schema.Attribute.Text;
    apiKey: Schema.Attribute.String;
    center: Schema.Attribute.Component<'assets.double-text', false>;
    email: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    zoom: Schema.Attribute.Integer;
  };
}

export interface ContactPageSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_social_medias';
  info: {
    displayName: 'SocialMedia';
  };
  attributes: {
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    heading: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
  };
}

export interface CorporateSectionCorporateConcierge
  extends Struct.ComponentSchema {
  collectionName: 'components_corporate_section_corporate_concierges';
  info: {
    displayName: 'CorporateConcierge';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.icon-text-card', true>;
    ctas: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sectionDescription: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface CorporateSectionCorporateHero extends Struct.ComponentSchema {
  collectionName: 'components_corporate_section_corporate_heroes';
  info: {
    description: '';
    displayName: 'CorporateHero';
  };
  attributes: {
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    cards: Schema.Attribute.Component<'assets.icon-text', true>;
    cyclicText: Schema.Attribute.Component<'assets.cyclic-text', true>;
    desktopImage: Schema.Attribute.Media<'images'>;
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileImage: Schema.Attribute.Media<'images'>;
    sectionDescription: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
  };
}

export interface CorporateSectionEsgCompliance extends Struct.ComponentSchema {
  collectionName: 'components_corporate_section_esg_compliance';
  info: {
    description: '';
    displayName: 'esgCompliance';
  };
  attributes: {
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    cards: Schema.Attribute.Component<'components.icon-text-card', true>;
    image: Schema.Attribute.Media<'images'>;
    informationCard: Schema.Attribute.Component<
      'components.information-card',
      false
    >;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface CorporateSectionOurProduct extends Struct.ComponentSchema {
  collectionName: 'components_corporate_section_our_product';
  info: {
    description: '';
    displayName: 'OurProduct';
  };
  attributes: {
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'components.our-product-card', true>;
  };
}

export interface CorporateSectionUseLuxy extends Struct.ComponentSchema {
  collectionName: 'components_corporate_section_use_luxy';
  info: {
    description: '';
    displayName: 'UseLuxy';
  };
  attributes: {
    additionalCardHeading: Schema.Attribute.String;
    additionalCardPrimaryImage: Schema.Attribute.Media<'images'>;
    additionalCardPrimaryText: Schema.Attribute.String;
    additionalCardSubTitle: Schema.Attribute.String;
    card: Schema.Attribute.Component<'components.image-card', true>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface FaqAskedQuestion extends Struct.ComponentSchema {
  collectionName: 'components_faq_asked_questions';
  info: {
    description: '';
    displayName: 'AskedQuestion';
  };
  attributes: {
    heading: Schema.Attribute.String;
    primaryText: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    topics: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-question.faq-question'
    >;
  };
}

export interface FaqFaqDetail extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_details';
  info: {
    displayName: 'FaqDetail';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface FaqFaqHero extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_heroes';
  info: {
    description: '';
    displayName: 'FaqHero';
  };
  attributes: {
    heading: Schema.Attribute.Component<'assets.cyclic-text', true>;
    identifyKey: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface LuxyAcademyHeroAcademy extends Struct.ComponentSchema {
  collectionName: 'components_luxy_academy_hero_academies';
  info: {
    displayName: 'HeroAcademy';
  };
  attributes: {
    heading: Schema.Attribute.Component<'assets.cyclic-text', true>;
    IdentifyKey: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface MobileAppMobileCard extends Struct.ComponentSchema {
  collectionName: 'components_mobile_app_mobile_cards';
  info: {
    displayName: 'MobileCard';
  };
  attributes: {
    cardHeading: Schema.Attribute.Text;
    cardTitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    primaryText: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
  };
}

export interface MobileAppMobileHero extends Struct.ComponentSchema {
  collectionName: 'components_mobile_app_mobile_heroes';
  info: {
    description: '';
    displayName: 'MobileHero';
  };
  attributes: {
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    desktopImage: Schema.Attribute.Media<'images'>;
    headingComponent: Schema.Attribute.Component<'assets.cyclic-text', true>;
    subTitle: Schema.Attribute.String;
  };
}

export interface OneRideAcademyHero extends Struct.ComponentSchema {
  collectionName: 'components_luxy_academy_academy_heroes';
  info: {
    description: '';
    displayName: 'OneRideHero';
  };
  attributes: {
    headingComponent: Schema.Attribute.Component<'assets.cyclic-text', true>;
    image: Schema.Attribute.Media<'images'>;
    primaryText: Schema.Attribute.Text;
  };
}

export interface OneRideEachRide extends Struct.ComponentSchema {
  collectionName: 'components_luxy_academy_each_rides';
  info: {
    description: '';
    displayName: 'EachRide';
  };
  attributes: {
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    heading: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
  };
}

export interface OneRideMakeDiffrence extends Struct.ComponentSchema {
  collectionName: 'components_luxy_academy_make_diffrences';
  info: {
    description: '';
    displayName: 'MakeDiffrence';
  };
  attributes: {
    cards: Schema.Attribute.Component<'assets.img-txt-card', true>;
    heading: Schema.Attribute.String;
    primaryText: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
  };
}

export interface OneRideOneTree extends Struct.ComponentSchema {
  collectionName: 'components_luxy_academy_one_trees';
  info: {
    description: '';
    displayName: 'OneTree';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    primaryText: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    treeCount: Schema.Attribute.String;
  };
}

export interface OneRideOurCommitment extends Struct.ComponentSchema {
  collectionName: 'components_luxy_academy_our_commitments';
  info: {
    description: '';
    displayName: 'OurCommitment';
  };
  attributes: {
    heading: Schema.Attribute.String;
    primaryText: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
  };
}

export interface SectionsConcierge extends Struct.ComponentSchema {
  collectionName: 'components_sections_concierges';
  info: {
    description: '';
    displayName: 'Concierge';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.concierge-card', true>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsCustomerExperience extends Struct.ComponentSchema {
  collectionName: 'components_sections_customer_experiences';
  info: {
    description: '';
    displayName: 'CustomerExperience';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.notification-card', true>;
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sectionDescription: Schema.Attribute.String;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsDriverAppAndPortal extends Struct.ComponentSchema {
  collectionName: 'components_sections_driver_app_and_portals';
  info: {
    description: '';
    displayName: 'DriverAppPortal';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.app-and-portal-card', true>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_heroes';
  info: {
    description: '';
    displayName: 'HomeHero';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.hero-card', true>;
    cyclicText: Schema.Attribute.Component<'assets.cyclic-text', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    showImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsLuxyApi extends Struct.ComponentSchema {
  collectionName: 'components_sections_luxy_apis';
  info: {
    description: '';
    displayName: 'LuxyApi';
  };
  attributes: {
    ctas: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    image: Schema.Attribute.Media<'images'>;
    sectionDescription: Schema.Attribute.String;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsOurServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_services';
  info: {
    description: '';
    displayName: 'OurServices';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.image-card', true>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsOurTechnology extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_technologies';
  info: {
    description: '';
    displayName: 'OurTechnology';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.icon-card', true>;
    ctas: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    desktopImage: Schema.Attribute.Media<'images'>;
    mobileImage: Schema.Attribute.Media<'images'>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsOurVerticals extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_verticals';
  info: {
    description: '';
    displayName: 'OurVerticals';
  };
  attributes: {
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    slides: Schema.Attribute.Relation<'oneToMany', 'api::slide.slide'>;
  };
}

export interface SectionsSavingEarth extends Struct.ComponentSchema {
  collectionName: 'components_sections_saving_earths';
  info: {
    description: '';
    displayName: 'SavingEarth';
  };
  attributes: {
    cardHeading: Schema.Attribute.String;
    cardTitle: Schema.Attribute.String;
    ctas: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    list: Schema.Attribute.Component<'assets.icon-text', true>;
    sectionDescription: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialsReviews extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_reviews';
  info: {
    description: '';
    displayName: 'TestimonialsReviews';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.testimonial-card', true>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_sections_what_we_dos';
  info: {
    description: '';
    displayName: 'WhatWeDo';
  };
  attributes: {
    card: Schema.Attribute.Component<'assets.list', true>;
    image: Schema.Attribute.Media<'images'>;
    sectionDescription: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsWhyLuxy extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_luxies';
  info: {
    description: '';
    displayName: 'WhyLuxy';
    icon: '';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.icon-text-card', true>;
    image: Schema.Attribute.Media<'images'>;
    notification: Schema.Attribute.Component<
      'components.notification-card',
      false
    >;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SharedReadAboutCases extends Struct.ComponentSchema {
  collectionName: 'components_shared_read_about_cases';
  info: {
    displayName: 'ReadAboutCases';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    sectionDescription: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    template: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedUseLuxyToday extends Struct.ComponentSchema {
  collectionName: 'components_shared_use_luxy_todays';
  info: {
    displayName: 'UseLuxyToday';
  };
  attributes: {
    cta: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    listitems: Schema.Attribute.Component<'assets.icon-text', true>;
    sectionDescription: Schema.Attribute.String;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SupplierSectionBecomeDriver extends Struct.ComponentSchema {
  collectionName: 'components_supplier_section_become_drivers';
  info: {
    description: '';
    displayName: 'BecomeDriver';
  };
  attributes: {
    button: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
    card: Schema.Attribute.Component<'supplier-section.vehicle-card', true>;
    image: Schema.Attribute.Media<'images'>;
    sectionDescription: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SupplierSectionFocusEnvironment
  extends Struct.ComponentSchema {
  collectionName: 'components_supplier_section_focus_environments';
  info: {
    displayName: 'FocusEnvironment';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.icon-text-card', true>;
    image: Schema.Attribute.Media<'images'>;
    sectionDescription: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SupplierSectionJoinLuxy extends Struct.ComponentSchema {
  collectionName: 'components_supplier_section_join_luxys';
  info: {
    description: '';
    displayName: 'JoinLuxy';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.supplier-card', true>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface SupplierSectionSupplierHero extends Struct.ComponentSchema {
  collectionName: 'components_supplier_section_supplier_heroes';
  info: {
    description: '';
    displayName: 'SupplierHero';
  };
  attributes: {
    barCardProps: Schema.Attribute.Component<'assets.cyclic-text', true>;
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    cyclicText: Schema.Attribute.Component<'assets.cyclic-text', true>;
    desktopImage: Schema.Attribute.Media<'images'>;
    informationCard: Schema.Attribute.Component<
      'components.information-card',
      false
    >;
    sectionDescription: Schema.Attribute.String;
    sectionHeading: Schema.Attribute.String;
  };
}

export interface SupplierSectionSupportLocal extends Struct.ComponentSchema {
  collectionName: 'components_supplier_section_support_locals';
  info: {
    description: '';
    displayName: 'SupportLocal';
  };
  attributes: {
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    cards: Schema.Attribute.Component<'components.icon-card', true>;
    image: Schema.Attribute.Media<'images'>;
    sectionDescription: Schema.Attribute.String;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SupplierSectionVehicleCard extends Struct.ComponentSchema {
  collectionName: 'components_supplier_section_vehicle_cards';
  info: {
    description: '';
    displayName: 'VehicleCard';
  };
  attributes: {
    content: Schema.Attribute.Relation<'oneToMany', 'api::vehicle.vehicle'>;
    hasVehicle: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    heading: Schema.Attribute.String;
    iconName: Schema.Attribute.Enumeration<
      [
        'AvailabilityIcon',
        'AddressIcon',
        'AffordableIcon',
        'AppIcon',
        'AppStoreLogoIcon',
        'ArrowDownIcon',
        'ArrowDownRightIcon',
        'ArrowRightIcon',
        'ArrowUpIcon',
        'DistanceIcon',
        'LuggageIcon',
        'CabFillIcon',
        'CabIcon',
        'CarsOnRoadIcon',
        'CentralizedPlatformIcon',
        'CheckMarkIcon',
        'ChildSeatIcon',
        'CloseIcon',
        'CompensationIcon',
        'ContactIcon',
        'CreditCardIcon',
        'CustomerServiceIcon',
        'DateIcon',
        'DeleteIcon',
        'DepartureIcon',
        'DieselConsumedIcon',
        'DirectionIcon',
        'DriverStatusIcon',
        'DropDownIcon',
        'DropOffIcon',
        'DrivesEmptyIcon',
        'EasyBookingIcon',
        'EmailIcon',
        'EmailVerifiedIcon',
        'EmployeeSatisfactionIcon',
        'EmptyLegsIcon',
        'EmptyTransitIcon',
        'FacebookIcon',
        'FeesIcon',
        'GasolineConsumedIcon',
        'GoogleLogoIcon',
        'GreenTechnologyIcon',
        'HeadsetIcon',
        'HealthBenefitIcon',
        'HomeIcon',
        'InstagramLogoIcon',
        'InformationIcon',
        'LeaveIcon',
        'LicenseIcon',
        'LinkedinLogoIcon',
        'LuxyIcon',
        'MilesDrivenIcon',
        'MinimiseIcon',
        'OurMissionIcon',
        'OurValuesIcon',
        'OurVisionIcon',
        'OnboardIcon',
        'OpenIcon',
        'PassengerExperienceIcon',
        'PassengerIcon',
        'PassengersIcon',
        'PetIcon',
        'PickUpIcon',
        'PickUpLocationIcon',
        'PlaceMarkerIcon',
        'PlayIcon',
        'PlayStoreLogoIcon',
        'PlusCircleIcon',
        'RatingStarIcon',
        'ReturnMatchingIcon',
        'RideBookedIcon',
        'RideConfirmedIcon',
        'RidePlanningIcon',
        'RouteIcon',
        'SafetyCheckIcon',
        'ScheduleRidesIcon',
        'SearchIcon',
        'SwapIcon',
        'TankerTrucksIcon',
        'TeamSupportIcon',
        'TimeIcon',
        'TimeEfficientIcon',
        'TrainingIcon',
        'TrainingManagersIcon',
        'TrustpilotLogoIcon',
        'TwitterLogoIcon',
        'UserTypeIcon',
        'VehicleDrivenIcon',
        'WorkStationIcon',
      ]
    >;
    text: Schema.Attribute.Text;
  };
}

export interface SustainabilityIssueWeTackle extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_issue_we_tackles';
  info: {
    description: '';
    displayName: 'IssueWeTackle';
  };
  attributes: {
    heading: Schema.Attribute.String;
    primaryText: Schema.Attribute.Text;
    slides: Schema.Attribute.Component<'components.icon-card', true>;
    subTitle: Schema.Attribute.String;
  };
}

export interface SustainabilityPuttingPerspective
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_putting_perspectives';
  info: {
    description: '';
    displayName: 'PuttingPerspective';
  };
  attributes: {
    content: Schema.Attribute.Relation<
      'oneToMany',
      'api::perspective-tab.perspective-tab'
    >;
    heading: Schema.Attribute.Component<'assets.cyclic-text', true>;
    smallText: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
  };
}

export interface SustainabilitySustainabilityHero
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_sustainability_heroes';
  info: {
    description: '';
    displayName: 'SustainabilityHero';
  };
  attributes: {
    barCard: Schema.Attribute.Component<'assets.bar-card', false>;
    barHeight: Schema.Attribute.Component<'assets.cyclic-text', true>;
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sectionDescription: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
    values: Schema.Attribute.Component<'assets.cyclic-text', true>;
    valueTitle: Schema.Attribute.Component<'assets.cyclic-text', true>;
  };
}

export interface TravelAgentAppPortal extends Struct.ComponentSchema {
  collectionName: 'components_travel_agent_app_portals';
  info: {
    description: '';
    displayName: 'AppPortal';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.app-and-portal-card', true>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface TravelAgentEarnMore extends Struct.ComponentSchema {
  collectionName: 'components_travel_agent_earn_mores';
  info: {
    description: '';
    displayName: 'JoinAgentProgram';
  };
  attributes: {
    reviewCards: Schema.Attribute.Component<'components.ratings-card', true>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface TravelAgentEarningEase extends Struct.ComponentSchema {
  collectionName: 'components_travel_agent_earning_eases';
  info: {
    displayName: 'EarningEase';
  };
  attributes: {
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    cardHeading: Schema.Attribute.String;
    cardTitle: Schema.Attribute.String;
    infoText: Schema.Attribute.String;
    multiplier: Schema.Attribute.Integer;
    sectionDescription: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface TravelAgentJoinLuxy extends Struct.ComponentSchema {
  collectionName: 'components_travel_agent_join_luxies';
  info: {
    description: '';
    displayName: 'JoinLuxy';
  };
  attributes: {
    cards: Schema.Attribute.Component<'assets.img-txt-card', true>;
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface TravelAgentTravelHero extends Struct.ComponentSchema {
  collectionName: 'components_travel_agent_travel_heroes';
  info: {
    description: '';
    displayName: 'TravelHero';
  };
  attributes: {
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    card: Schema.Attribute.Component<'assets.icon-text', false>;
    cyclicText: Schema.Attribute.Component<'assets.cyclic-text', true>;
    image: Schema.Attribute.Media<'images'>;
    informationcard: Schema.Attribute.Component<'components.info-card', false>;
    sectionDescription: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
  };
}

export interface TravelAgentUseLuxy extends Struct.ComponentSchema {
  collectionName: 'components_travel_agent_use_luxies';
  info: {
    displayName: 'UseLuxy';
  };
  attributes: {
    sectionHeading: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-hero': AboutUsAboutHero;
      'about-us.card-props': AboutUsCardProps;
      'about-us.our-story': AboutUsOurStory;
      'about-us.our-team': AboutUsOurTeam;
      'airport-page.airport-hero': AirportPageAirportHero;
      'airport-page.best-service': AirportPageBestService;
      'airport-page.booking-easy': AirportPageBookingEasy;
      'airport-page.google-reviews': AirportPageGoogleReviews;
      'airport-page.serving-around': AirportPageServingAround;
      'airport-page.travel-agent': AirportPageTravelAgent;
      'assets.bar-card': AssetsBarCard;
      'assets.cyclic-text': AssetsCyclicText;
      'assets.double-text': AssetsDoubleText;
      'assets.heder-button': AssetsHederButton;
      'assets.icon-link': AssetsIconLink;
      'assets.icon-text': AssetsIconText;
      'assets.icon-text-link': AssetsIconTextLink;
      'assets.img-txt-card': AssetsImgTxtCard;
      'assets.list': AssetsList;
      'assets.list-items': AssetsListItems;
      'assets.text-link': AssetsTextLink;
      'assets.url-link': AssetsUrlLink;
      'blocks.app-and-portal-card': BlocksAppAndPortalCard;
      'blocks.concierge-card': BlocksConciergeCard;
      'blocks.footer': BlocksFooter;
      'blocks.mobile-app-and-contact': BlocksMobileAppAndContact;
      'blocks.slides': BlocksSlides;
      'blog-page.blog-page': BlogPageBlogPage;
      'blog-page.recent-article': BlogPageRecentArticle;
      'blog-page.signup-letter': BlogPageSignupLetter;
      'career.career-hero': CareerCareerHero;
      'career.job-details': CareerJobDetails;
      'career.open-roles': CareerOpenRoles;
      'career.perks': CareerPerks;
      'city-section.city-section': CitySectionCitySection;
      'components.header-link': ComponentsHeaderLink;
      'components.hero-card': ComponentsHeroCard;
      'components.icon-card': ComponentsIconCard;
      'components.icon-text-card': ComponentsIconTextCard;
      'components.image-card': ComponentsImageCard;
      'components.info-card': ComponentsInfoCard;
      'components.information-card': ComponentsInformationCard;
      'components.location-card': ComponentsLocationCard;
      'components.notification-card': ComponentsNotificationCard;
      'components.our-product-card': ComponentsOurProductCard;
      'components.perspective-tab': ComponentsPerspectiveTab;
      'components.ratings-card': ComponentsRatingsCard;
      'components.supplier-card': ComponentsSupplierCard;
      'components.testimonial-card': ComponentsTestimonialCard;
      'components.text-card': ComponentsTextCard;
      'contact-page.contact-us-map': ContactPageContactUsMap;
      'contact-page.social-media': ContactPageSocialMedia;
      'corporate-section.corporate-concierge': CorporateSectionCorporateConcierge;
      'corporate-section.corporate-hero': CorporateSectionCorporateHero;
      'corporate-section.esg-compliance': CorporateSectionEsgCompliance;
      'corporate-section.our-product': CorporateSectionOurProduct;
      'corporate-section.use-luxy': CorporateSectionUseLuxy;
      'faq.asked-question': FaqAskedQuestion;
      'faq.faq-detail': FaqFaqDetail;
      'faq.faq-hero': FaqFaqHero;
      'luxy-academy.hero-academy': LuxyAcademyHeroAcademy;
      'mobile-app.mobile-card': MobileAppMobileCard;
      'mobile-app.mobile-hero': MobileAppMobileHero;
      'one-ride.academy-hero': OneRideAcademyHero;
      'one-ride.each-ride': OneRideEachRide;
      'one-ride.make-diffrence': OneRideMakeDiffrence;
      'one-ride.one-tree': OneRideOneTree;
      'one-ride.our-commitment': OneRideOurCommitment;
      'sections.concierge': SectionsConcierge;
      'sections.customer-experience': SectionsCustomerExperience;
      'sections.driver-app-and-portal': SectionsDriverAppAndPortal;
      'sections.home-hero': SectionsHomeHero;
      'sections.luxy-api': SectionsLuxyApi;
      'sections.our-services': SectionsOurServices;
      'sections.our-technology': SectionsOurTechnology;
      'sections.our-verticals': SectionsOurVerticals;
      'sections.saving-earth': SectionsSavingEarth;
      'sections.testimonials-reviews': SectionsTestimonialsReviews;
      'sections.what-we-do': SectionsWhatWeDo;
      'sections.why-luxy': SectionsWhyLuxy;
      'shared.read-about-cases': SharedReadAboutCases;
      'shared.seo': SharedSeo;
      'shared.use-luxy-today': SharedUseLuxyToday;
      'supplier-section.become-driver': SupplierSectionBecomeDriver;
      'supplier-section.focus-environment': SupplierSectionFocusEnvironment;
      'supplier-section.join-luxy': SupplierSectionJoinLuxy;
      'supplier-section.supplier-hero': SupplierSectionSupplierHero;
      'supplier-section.support-local': SupplierSectionSupportLocal;
      'supplier-section.vehicle-card': SupplierSectionVehicleCard;
      'sustainability.issue-we-tackle': SustainabilityIssueWeTackle;
      'sustainability.putting-perspective': SustainabilityPuttingPerspective;
      'sustainability.sustainability-hero': SustainabilitySustainabilityHero;
      'travel-agent.app-portal': TravelAgentAppPortal;
      'travel-agent.earn-more': TravelAgentEarnMore;
      'travel-agent.earning-ease': TravelAgentEarningEase;
      'travel-agent.join-luxy': TravelAgentJoinLuxy;
      'travel-agent.travel-hero': TravelAgentTravelHero;
      'travel-agent.use-luxy': TravelAgentUseLuxy;
    }
  }
}
