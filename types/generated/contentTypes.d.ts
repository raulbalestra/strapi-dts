import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutUsAboutUs extends Struct.SingleTypeSchema {
  collectionName: 'about_uses';
  info: {
    description: '';
    displayName: 'AboutUs';
    pluralName: 'about-uses';
    singularName: 'about-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutHero: Schema.Attribute.Component<'about-us.about-hero', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    getInTouch: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      false
    >;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-us.about-us'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    ourStory: Schema.Attribute.Component<'about-us.our-story', false>;
    ourTeam: Schema.Attribute.Component<'about-us.our-team', false>;
    publishedAt: Schema.Attribute.DateTime;
    savingEarth: Schema.Attribute.Component<'sections.saving-earth', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAcademyTagAcademyTag extends Struct.CollectionTypeSchema {
  collectionName: 'academy_tags';
  info: {
    displayName: 'AcademyTag';
    pluralName: 'academy-tags';
    singularName: 'academy-tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    href: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::academy-tag.academy-tag'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    tag: Schema.Attribute.Enumeration<['a', 'button']> &
      Schema.Attribute.DefaultTo<'a'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAcademyVideoAcademyVideo
  extends Struct.CollectionTypeSchema {
  collectionName: 'academy_videos';
  info: {
    description: '';
    displayName: 'AcademyVideo';
    pluralName: 'academy-videos';
    singularName: 'academy-video';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.DateTime;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::academy-video.academy-video'
    > &
      Schema.Attribute.Private;
    primaryText: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    tags: Schema.Attribute.Relation<
      'oneToMany',
      'api::academy-tag.academy-tag'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoSrc: Schema.Attribute.Media<'videos'>;
  };
}

export interface ApiAirportAirport extends Struct.CollectionTypeSchema {
  collectionName: 'airports';
  info: {
    description: '';
    displayName: 'Airport';
    pluralName: 'airports';
    singularName: 'airport';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    airportHero: Schema.Attribute.Component<'airport-page.airport-hero', false>;
    bestService: Schema.Attribute.Component<'airport-page.best-service', false>;
    bookingEasy: Schema.Attribute.Component<'airport-page.booking-easy', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    googleReviews: Schema.Attribute.Component<
      'airport-page.google-reviews',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::airport.airport'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    Name: Schema.Attribute.String;
    needHelp: Schema.Attribute.Component<'blocks.mobile-app-and-contact', true>;
    publishedAt: Schema.Attribute.DateTime;
    readAboutCases: Schema.Attribute.Component<
      'shared.read-about-cases',
      false
    >;
    servingAround: Schema.Attribute.Component<
      'airport-page.serving-around',
      false
    >;
    slug: Schema.Attribute.UID<'Name'>;
    travelTheBestCity: Schema.Attribute.Component<
      'airport-page.travel-agent',
      false
    >;
    type: Schema.Attribute.Enumeration<['airport', 'city']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogDetailBlogDetail extends Struct.SingleTypeSchema {
  collectionName: 'blog_details';
  info: {
    description: '';
    displayName: 'BlogDetail';
    pluralName: 'blog-details';
    singularName: 'blog-detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-detail.blog-detail'
    > &
      Schema.Attribute.Private;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    relatedArticle: Schema.Attribute.Component<
      'blog-page.recent-article',
      false
    >;
    signupLetter: Schema.Attribute.Component<'blog-page.signup-letter', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogUrl: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.DateTime;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'> &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    primaryText: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    readingTime: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'heading'>;
    tag: Schema.Attribute.Relation<'manyToOne', 'api::tag.tag'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCareerCareer extends Struct.SingleTypeSchema {
  collectionName: 'careers';
  info: {
    description: '';
    displayName: 'Career';
    pluralName: 'careers';
    singularName: 'career';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CareerHero: Schema.Attribute.Component<'career.career-hero', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::career.career'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    openRoles: Schema.Attribute.Component<'career.open-roles', false>;
    ourStory: Schema.Attribute.Component<'about-us.our-story', false>;
    perk: Schema.Attribute.Component<'career.perks', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConciergeCardConciergeCard
  extends Struct.CollectionTypeSchema {
  collectionName: 'concierge_cards';
  info: {
    displayName: 'Concierge card';
    pluralName: 'concierge-cards';
    singularName: 'concierge-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::concierge-card.concierge-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactUsContactUs extends Struct.SingleTypeSchema {
  collectionName: 'contact_uses';
  info: {
    description: '';
    displayName: 'ContactUs';
    pluralName: 'contact-uses';
    singularName: 'contact-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ContactUsMap: Schema.Attribute.Component<
      'contact-page.contact-us-map',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us.contact-us'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    NeedHelp: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      false
    >;
    OurApplication: Schema.Attribute.Component<
      'contact-page.social-media',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    SocialMedia: Schema.Attribute.Component<'contact-page.social-media', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCorporateCorporate extends Struct.SingleTypeSchema {
  collectionName: 'corporates';
  info: {
    description: '';
    displayName: 'Corporate';
    pluralName: 'corporates';
    singularName: 'corporate';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    corporateConcierge: Schema.Attribute.Component<
      'corporate-section.corporate-concierge',
      false
    >;
    corporateHero: Schema.Attribute.Component<
      'corporate-section.corporate-hero',
      false
    >;
    corporateTestimonial: Schema.Attribute.Component<
      'sections.testimonials-reviews',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    esgCompliance: Schema.Attribute.Component<
      'corporate-section.esg-compliance',
      false
    >;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::corporate.corporate'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    ourProductEveryone: Schema.Attribute.Component<
      'corporate-section.our-product',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    readAboutCases: Schema.Attribute.Component<
      'shared.read-about-cases',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useLuxyCorporate: Schema.Attribute.Component<
      'corporate-section.use-luxy',
      false
    >;
    useLuxyToday: Schema.Attribute.Component<'shared.use-luxy-today', false>;
  };
}

export interface ApiCtaCta extends Struct.CollectionTypeSchema {
  collectionName: 'ctas';
  info: {
    description: '';
    displayName: 'CTA';
    pluralName: 'ctas';
    singularName: 'cta';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    iconName: Schema.Attribute.Enumeration<
      [
        'CheckMarkIcon',
        'DirectionIcon',
        'ArrowUpIcon',
        'AvailabilityIcon',
        'HeadsetIcon',
        'FeesIcon',
        'CabIcon',
        'AppIcon',
        'UserTypeIcon',
        'CustomerServiceIcon',
        'PlayIcon',
        'DriverStatusIcon',
        'RideConfirmedIcon',
        'RideBookedIcon',
        'GreenTechnologyIcon',
        'AffordableIcon',
        'PickUpLocationIcon',
        'EmployeeISatisfactionIcon',
        'DropOffIcon',
        'ScheduleRidesIcon',
        'PlaceMarkerIcon',
        'PassengerIExperienceIcon',
        'EasyBookingIcon',
        'CabFillIcon',
        'LicenseIcon',
        'RatingStarIcon',
        'LuxyLogomark',
        'EmptyLegsIcon',
        'CarsOnRoadIcon',
        'SafetyCheckIcon',
        'CentralizedIPlatformIcon',
        'TimeEfficientIcon',
        'RouteIcon',
        'RidePlanningIcon',
        'ReturnMatchingIcon',
        'TrainingIcon',
        'ArrowDownRightIcon',
        'EmailIcon',
        'ContactNumberIcon',
        'AddressIcon',
        'TwitterLogoIcon',
        'InstagramLogoIcon',
        'LinkedinLogoIcon',
        'FacebookIcon',
        'AppStoreLogoIcon',
        'PlayStoreLogoIcon',
        'GoogleLogoIcon',
        'TeamSupportIcon',
        'TrustpilotLogoIcon',
        'TrainingManagersIcon',
        'SearchIcon',
        'HomeIcon',
        'ArrowDownIcon',
        'OurVisionIcon',
        'OpenIcon',
        'OnBoeardIcon',
        'DropdrownIcon',
        'CloseIcon',
        'EmptyTransitIcon',
        'DrivesEmptyIcon',
        'VehicleDrivenIcon',
        'MilesDrivenIcon',
        'GasolineConsumedIcon',
        'DieselConsumedIcon',
        'TankerTrucksIcon',
        'WorkStationIcon',
        'OurMissionIcon',
        'CompensationIcon',
        'OurValuesIcon',
        'LeaveIcon',
        'DepartureIcon',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    tag: Schema.Attribute.Enumeration<['button', 'a']> &
      Schema.Attribute.DefaultTo<'a'>;
    text: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
    ussage: Schema.Attribute.Enumeration<
      ['supplier', 'corporate', 'travel-agent', 'common']
    > &
      Schema.Attribute.DefaultTo<'common'>;
  };
}

export interface ApiFaqQuestionFaqQuestion extends Struct.CollectionTypeSchema {
  collectionName: 'faq_questions';
  info: {
    displayName: 'FaqQuestion';
    pluralName: 'faq-questions';
    singularName: 'faq-question';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqData: Schema.Attribute.Component<'faq.faq-detail', true>;
    IdentifyKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-question.faq-question'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqFaq extends Struct.SingleTypeSchema {
  collectionName: 'faqs';
  info: {
    description: '';
    displayName: 'Faq';
    pluralName: 'faqs';
    singularName: 'faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    askedQuestion: Schema.Attribute.Component<'faq.asked-question', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqHero: Schema.Attribute.Component<'faq.faq-hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'> &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Struct.SingleTypeSchema {
  collectionName: 'globals';
  info: {
    description: 'Define global settings';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footer: Schema.Attribute.Component<'blocks.footer', true>;
    headerButton: Schema.Attribute.Component<'assets.heder-button', false>;
    headerNavigation: Schema.Attribute.Component<
      'components.header-link',
      true
    >;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global.global'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Struct.SingleTypeSchema {
  collectionName: 'homepages';
  info: {
    description: '';
    displayName: 'homepage';
    pluralName: 'homepages';
    singularName: 'homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    appPortal: Schema.Attribute.Component<
      'sections.driver-app-and-portal',
      false
    >;
    concierge: Schema.Attribute.Component<'sections.concierge', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    customerExperience: Schema.Attribute.Component<
      'sections.customer-experience',
      false
    >;
    hero: Schema.Attribute.Component<'sections.home-hero', false>;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homepage.homepage'
    > &
      Schema.Attribute.Private;
    luxyApi: Schema.Attribute.Component<'sections.luxy-api', false>;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    ourServices: Schema.Attribute.Component<'sections.our-services', false>;
    ourVerticals: Schema.Attribute.Component<'sections.our-verticals', false>;
    publishedAt: Schema.Attribute.DateTime;
    savingEarth: Schema.Attribute.Component<'sections.saving-earth', false>;
    technology: Schema.Attribute.Component<'sections.our-technology', false>;
    testimonialReview: Schema.Attribute.Component<
      'sections.testimonials-reviews',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatWeDo: Schema.Attribute.Component<'sections.what-we-do', false>;
    whyLuxy: Schema.Attribute.Component<'sections.why-luxy', false>;
  };
}

export interface ApiJobJob extends Struct.CollectionTypeSchema {
  collectionName: 'jobs';
  info: {
    description: '';
    displayName: 'Job';
    pluralName: 'jobs';
    singularName: 'job';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    jobDetails: Schema.Attribute.Component<'career.job-details', true>;
    jobType: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::job.job'> &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLuxyAcademyLuxyAcademy extends Struct.SingleTypeSchema {
  collectionName: 'luxy_academies';
  info: {
    description: '';
    displayName: 'LuxyAcademy';
    pluralName: 'luxy-academies';
    singularName: 'luxy-academy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    academyHero: Schema.Attribute.Component<'luxy-academy.hero-academy', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::luxy-academy.luxy-academy'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLuxyBlogLuxyBlog extends Struct.SingleTypeSchema {
  collectionName: 'luxy_blogs';
  info: {
    description: '';
    displayName: 'LuxyBlog';
    pluralName: 'luxy-blogs';
    singularName: 'luxy-blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogHero: Schema.Attribute.Component<'blog-page.blog-page', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::luxy-blog.luxy-blog'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    recentArticle: Schema.Attribute.Component<
      'blog-page.recent-article',
      false
    >;
    signupLetter: Schema.Attribute.Component<'blog-page.signup-letter', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMobileAppMobileApp extends Struct.SingleTypeSchema {
  collectionName: 'mobile_apps';
  info: {
    description: '';
    displayName: 'MobileApp';
    pluralName: 'mobile-apps';
    singularName: 'mobile-app';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mobile-app.mobile-app'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    mobileContent: Schema.Attribute.Component<'mobile-app.mobile-card', true>;
    mobileHero: Schema.Attribute.Component<'mobile-app.mobile-hero', false>;
    publishedAt: Schema.Attribute.DateTime;
    signupLetter: Schema.Attribute.Component<'blog-page.signup-letter', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOneRideOneRide extends Struct.SingleTypeSchema {
  collectionName: 'one_rides';
  info: {
    description: '';
    displayName: 'OneRide';
    pluralName: 'one-rides';
    singularName: 'one-ride';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    academyHero: Schema.Attribute.Component<'one-ride.academy-hero', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eachRide: Schema.Attribute.Component<'one-ride.each-ride', false>;
    info: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::one-ride.one-ride'
    > &
      Schema.Attribute.Private;
    makeDifference: Schema.Attribute.Component<
      'one-ride.make-diffrence',
      false
    >;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    oneTree: Schema.Attribute.Component<'one-ride.one-tree', false>;
    ourCommitment: Schema.Attribute.Component<'one-ride.our-commitment', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerspectiveTabPerspectiveTab
  extends Struct.CollectionTypeSchema {
  collectionName: 'perspective_tabs';
  info: {
    displayName: 'PerspectiveTab';
    pluralName: 'perspective-tabs';
    singularName: 'perspective-tab';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Component<'components.perspective-tab', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::perspective-tab.perspective-tab'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSlideSlide extends Struct.CollectionTypeSchema {
  collectionName: 'slides';
  info: {
    description: '';
    displayName: 'Slide';
    pluralName: 'slides';
    singularName: 'slide';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    buttons: Schema.Attribute.Relation<'oneToMany', 'api::cta.cta'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    desktopImage: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    list: Schema.Attribute.Component<'assets.icon-text', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::slide.slide'> &
      Schema.Attribute.Private;
    mobileImage: Schema.Attribute.Media<'images'>;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSupplierSupplier extends Struct.SingleTypeSchema {
  collectionName: 'suppliers';
  info: {
    description: '';
    displayName: 'Supplier';
    pluralName: 'suppliers';
    singularName: 'supplier';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    becomeDriver: Schema.Attribute.Component<
      'supplier-section.become-driver',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    driverAppPortal: Schema.Attribute.Component<
      'sections.driver-app-and-portal',
      false
    >;
    focusEnvironment: Schema.Attribute.Component<
      'supplier-section.focus-environment',
      false
    >;
    info: Schema.Attribute.String;
    joinLuxy: Schema.Attribute.Component<'supplier-section.join-luxy', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::supplier.supplier'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    readAboutCases: Schema.Attribute.Component<
      'shared.read-about-cases',
      false
    >;
    supplierHero: Schema.Attribute.Component<
      'supplier-section.supplier-hero',
      false
    >;
    supportLocalCompanies: Schema.Attribute.Component<
      'supplier-section.support-local',
      false
    >;
    testimonialReview: Schema.Attribute.Component<
      'sections.testimonials-reviews',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSustainabilitySustainability
  extends Struct.SingleTypeSchema {
  collectionName: 'sustainabilities';
  info: {
    description: '';
    displayName: 'Sustainability';
    pluralName: 'sustainabilities';
    singularName: 'sustainability';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    focusEnvironment: Schema.Attribute.Component<
      'supplier-section.focus-environment',
      false
    >;
    issueWeTackle: Schema.Attribute.Component<
      'sustainability.issue-we-tackle',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sustainability.sustainability'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    ourSustainableTravel: Schema.Attribute.Component<
      'travel-agent.join-luxy',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    puttingIntoPerspective: Schema.Attribute.Component<
      'sustainability.putting-perspective',
      false
    >;
    savingEarth: Schema.Attribute.Component<'sections.saving-earth', false>;
    sustainabilityHero: Schema.Attribute.Component<
      'sustainability.sustainability-hero',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTagTag extends Struct.CollectionTypeSchema {
  collectionName: 'tags';
  info: {
    description: '';
    displayName: 'Tag';
    pluralName: 'tags';
    singularName: 'tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    tag: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTravelAgentTravelAgent extends Struct.SingleTypeSchema {
  collectionName: 'travel_agents';
  info: {
    description: '';
    displayName: 'TravelAgent';
    pluralName: 'travel-agents';
    singularName: 'travel-agent';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    appPortal: Schema.Attribute.Component<'travel-agent.app-portal', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    earningEase: Schema.Attribute.Component<'travel-agent.earning-ease', false>;
    joinLuxy: Schema.Attribute.Component<'travel-agent.join-luxy', false>;
    joinTravelProgram: Schema.Attribute.Component<
      'travel-agent.earn-more',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::travel-agent.travel-agent'
    > &
      Schema.Attribute.Private;
    meta: Schema.Attribute.Component<'shared.seo', false>;
    mobileContact: Schema.Attribute.Component<
      'blocks.mobile-app-and-contact',
      true
    >;
    ourNetwork: Schema.Attribute.Component<'sections.what-we-do', false>;
    publishedAt: Schema.Attribute.DateTime;
    readAboutCases: Schema.Attribute.Component<
      'shared.read-about-cases',
      false
    >;
    travelHero: Schema.Attribute.Component<'travel-agent.travel-hero', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useLuxy: Schema.Attribute.Component<'travel-agent.use-luxy', false>;
    useLuxyToday: Schema.Attribute.Component<'shared.use-luxy-today', false>;
  };
}

export interface ApiVehicleVehicle extends Struct.CollectionTypeSchema {
  collectionName: 'vehicles';
  info: {
    displayName: 'Vehicle';
    pluralName: 'vehicles';
    singularName: 'vehicle';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    list: Schema.Attribute.Component<'assets.cyclic-text', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::vehicle.vehicle'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'heading'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::academy-tag.academy-tag': ApiAcademyTagAcademyTag;
      'api::academy-video.academy-video': ApiAcademyVideoAcademyVideo;
      'api::airport.airport': ApiAirportAirport;
      'api::blog-detail.blog-detail': ApiBlogDetailBlogDetail;
      'api::blog.blog': ApiBlogBlog;
      'api::career.career': ApiCareerCareer;
      'api::concierge-card.concierge-card': ApiConciergeCardConciergeCard;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::corporate.corporate': ApiCorporateCorporate;
      'api::cta.cta': ApiCtaCta;
      'api::faq-question.faq-question': ApiFaqQuestionFaqQuestion;
      'api::faq.faq': ApiFaqFaq;
      'api::global.global': ApiGlobalGlobal;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::job.job': ApiJobJob;
      'api::luxy-academy.luxy-academy': ApiLuxyAcademyLuxyAcademy;
      'api::luxy-blog.luxy-blog': ApiLuxyBlogLuxyBlog;
      'api::mobile-app.mobile-app': ApiMobileAppMobileApp;
      'api::one-ride.one-ride': ApiOneRideOneRide;
      'api::perspective-tab.perspective-tab': ApiPerspectiveTabPerspectiveTab;
      'api::slide.slide': ApiSlideSlide;
      'api::supplier.supplier': ApiSupplierSupplier;
      'api::sustainability.sustainability': ApiSustainabilitySustainability;
      'api::tag.tag': ApiTagTag;
      'api::travel-agent.travel-agent': ApiTravelAgentTravelAgent;
      'api::vehicle.vehicle': ApiVehicleVehicle;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
