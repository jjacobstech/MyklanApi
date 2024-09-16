# MyklanApi
- Myklan Api V1
# **_Myklan Api Routes_**

## API Endpoints

### Public Routes

### Login

- **POST** `/login`: Handles login.

- - **_Fields _**

- - - > Fields
- - - > email, password

### Register

- **POST** `/register`: Handles registration.

- - **_Fields _**

- - - > name,
- - - > email
- - - > password
- - - > agree = 1(this is constant)
- - - > g-recaptcha-response('recaptcha response if recaptcha is activated by admin')

### Languages

- **GET** `/languages`: Returns a list of languages.

### 2FA Verification

- **POST** `/verify/2fa`: Handles 2FA authentication

- - **_Fields _**

- - - > code( user 2FA code received by email)
- - - > user(this is the id of the user gotten after from the login route)

### 2FA Resend

- **POST** `/2fa/resend`: Handles resend of 2FA code

- -**_Fields _**

- - - > user (id of the user currently trying to get 2fa code)

### Private Routes (Require Authentication - Bearer Token)

### Logout

- **GET** `/logout`: Handles logout.

### Password Update

- **POST** `/update/password`: Handles password change

- - **_Fields _**

- - - > old_password
- - - > new_password(minimum of 6 characters)

### User Endpoints

- **GET** `/user` : Returns the current user's profile.

- **POST** `/update/user` : Updates the current user's settings.

- - **_Fields _**

- - - > full_name
- - - > username
- - - > email
- - - > website
- - - > facebook
- - - > twitter
- - - > instagram
- - - > youtube
- - - > pinterest
- - - > github
- - - > snapchat
- - - > tiktok
- - - > telegram
- - - > twitch
- - - > discord
- - - > vk
- - - > reddit
- - - > spotify
- - - > threads
- - - > kick
- - - > story
- - - > countries_id - Note: 159 for Nigeria - to get the id of countries use endpoint /countries route
- - - > city
- - - > address
- - - > zip - zip/postal no
- - - > profession
- - - > birthdate - Format - 09/13/2004 - MM/DD/YYYY
- - - > categories_id
- - - > company
- - - > story
- - - > gender
- - - > language - Options - en,es - to get the abbreviation of languages use endpoint /languages route
- - - > hide_name - Options - Yes or No

- **GET** `/blocked/countries` : Returns a list of blocked countries.

- **POST** `/block/countries` : Blocks a country.

- - **_Fields _**

- - - > countries - value should be in this format "NG,GH" if adding more that one country,another country can be added by adding a comma and a the country_code, to get the country_code available use '/countries - GET' route

### Dashboard

- **GET** `/dashboard` : Returns the dashboard data.

- **GET** `/get/data/chart/{slug}` : Returns chart data.

- - **_Fields _**

- - - > range : `month`,`lastmonth`,`year`

### Stories

- **RESOURCE** `/stories`: `StoriesController` INACTIVE

### Countries

- **GET** `/countries`: `CountriesStatesController@countries` : Returns a list of countries.
- **GET** `/countries/{id}`: `CountriesStatesController@showCountry` : Returns a country by ID.

### States

- **GET** `/states`: `CountriesStatesController@states` : Returns a list of states.
- **GET** `/states/{id}`: `CountriesStatesController@showState`: Returns a state by ID.

### Uploads

- **POST** `/upload/avatar`: `UserController@uploadAvatar` : Uploads an avatar.

- - **_Fields _**

- - - > avatar - `image to be uploaded`

- **POST** `/upload/cover`: `UserController@uploadCover` : Uploads a cover image.

- - **_Fields _**

- - - > cover - `image to be uploaded`

### Subscriptions

- **GET** `/mysubscriptions`: `UserController@mySubscriptions` : Returns the current user's subscriptions.

### Buy Subscription

- **POST** `/buy/subscription`: `SubscriptionsController@buy` : Buys a subscription.

- - **_Fields _**

- - - > id : `id of creator`
- - - > interval : weekly, monthly, quaterly,bianually
- - - > payment_gateway : wallet
- - - > agree_terms : 1

### Cancel Subscription

- **POST** `/subscription/wallet/cancel/{id}`: `SubscriptionsController@cancelWalletSubscription` : Cancels a subscription.

- **POST** `/subscription/paypal/cancel/{id}`: `PayPalController@cancelSubscription` : INACTIVE

- **POST** `/subscription/ccbill/cancel/{id}`: `CCBillController@cancelSubscription` : INACTIVE

### Free Subscription

- **POST** `/subscription/free/{id}`: `SubscriptionsController@subscriptionFree`: Subscribes to a free subscription.
- **POST** `/subscription/free/cancel/{id}`: `SubscriptionsController@cancelFreeSubscription`: Cancels a free subscription.

### Announcements

- **GET** `/announcements`: `UserController@announcements`: Returns announcements.

### Posts []

- **GET** `/myposts`: `UserController@myPosts` : Returns the current user's posts.
- **POST** `/post`: `UpdatesController@create` : Creates a new post.

- - **_Fields _**

- - - > fileuploader-list-photo[] - `multi file uploader for posting images, audio, videos : max 500MB`
- - - > zip - `zip file for upload`
- - - > epub - `epub file upload`
- - - > description `video url from youtube can also be used here - Format :  url = https://www.youtube.com/watch?v=niaMHbhsV5E  ,Extra text = Pretty by Astrid s. This will give https://www.youtube.com/watch?v=niaMHbhsV5E Pretty by Astrid s`
- - - > title
- - - > price `leave empty if not adding price`

- **GET** `/post/edit/{id}`: `UpdatesController@edit`: Returns a post for editing by ID.

- **POST** `/post/edit`: `UpdatesController@postEdit`: Updates a post.

- - **_Fields _**

- - - > id `id of post to edit`
- - - > zip - `zip file for upload`
- - - > epub - `epub file upload`
- - - > description `video url from youtube can also be used here - Format :  url = https://www.youtube.com/watch?v=niaMHbhsV5E  ,Extra text = Pretty by Astrid s. This will give https://www.youtube.com/watch?v=niaMHbhsV5E Pretty by Astrid s`
- - - > title
- - - > price `leave empty if not adding price`

- **POST** `/upload/media`: `UploadMediaController@store` : Media uploader for editing post
- **POST** `/delete/media`: `UploadMediaController@delete` : Media delete for editing post
- **POST** `/update/delete/{id}`: `UpdatesController@delete`: Deletes a post.
- **POST** `/like/post/{id}`: `UserController@like` : Like a post

### Dark Mode

- **GET** `/mode/{mode}`: `HomeController@darkMode` : Switch between light and dark mode

### Bookmarks

- **POST** `/add/bookmark/{id}`: `HomeController@addBookmark` : Book mark a post
- **GET** `/my/bookmarks`: `UserController@myBookmarks` : Get list of bookmarks

### Settings Conversations

- **GET** `/settings/conversations`: `UserController@settingsConversations` : Load User conversation settings page

- - > preloaded_file in response is the data of media for welcome message

- **POST** `/settings/conversations/update`: `UserController@updateConversations` : Update conversation settings

- - **_Fields _**

- - - > allow_dm - `1 / 0`
- - - > send_welcome_message - `1 / 0`
- - - > message - `welcome message text`
- - - > price_welcome_message - `set price for welcome message`

### Welcome Message Media []

- **POST** `/upload/welcome/message/media`: `UploadMediaWelcomeMessageController@store` : Media uploader for welcome message
- **POST** `/delete/welcome/message/media`: `UploadMediaWelcomeMessageController@delete` : Media delete for welcome message

### Delete Cover

- **POST** `/delete/cover`: `UserController@deleteImageCover` : Delete cover image

### Account []

- **POST** `/account/delete`: `UserController@deleteAccount` : Delete account
- **POST** `/account/deactivate`: `UserController@deactivateAccount` : Deactivate account

### Transfer Balance

- **POST** `/transfer/balance`: `UserController@transferBalance` : Transfer balance to wallet

- - **_Fields _**

- - - > amount - `amount to transfer`

### Reports []

- **POST** `/report/item/{id}`: `ProductsController@report` : Report item in shop

- - **_Fields _**

- - - > id - `product to report`
- - - > reason - `item_not_received, spoofing, copyright, privacy_issue, violent_sexual, fraud`

- **POST** `/report/post/{id}`: `UpdatesController@report` : Repost post

- - **_Fields _**

- - - > id - `post to report`
- - - > reason - `copyright, privacy_issue, violent_sexual`

- **POST** `/report/creator/{id}`: `UserController@reportCreator` : Report creator

- - **_Fields _**

- - - > id - `user to report`
- - - > reason - `spoofing, copyright, privacy_issue, violent_sexual, spam, fraud, under_age`

### Pay-Per-View []

- **POST** `/send/ppv`: `PayPerViewController@send` : Pay for a post or message

### Comments []

- **GET** `/load/comments`: `CommentsController@loadmore` : Get comments for a post
- **POST** `/comment/post`: `CommentsController@store` : Comment on a post
- **POST** `/edit/comment`: `CommentsController@edit` : Edit comment
- **POST** `/delete/comment/{id}`: `CommentsController@destroy` : Delete comment
- **POST** `/like/comment`: `CommentsController@like` : Like comment

### Restrict User

- **POST** `/restrict/user/{id}`: `UserController@restrictUser` : Restrict a user

- - > where {id} is user_id of user to restrict, run first time to restrict, run again to remove restriction

### Restrictions

- **GET** `/settings/restrictions`: `UserController@restrictions` : Get a list of restricted users

### Subscription Settings []

- **GET** `/settings/subscription`: `UserController@settingsSubscription` : Get list of subscription settings
- **POST** `/settings/subscription`: `UserController@saveSubscription` : Update subscription settings

### Privacy and Security []

- **GET** `/privacy/security`: `UserController@privacySecurity` : Get list of privacy settings
- **POST** `/update/privacy/security`: `UserController@savePrivacySecurity` : Update privacy settings

### Advertising

- **GET** `/adverts`: `AdvertisingController@show` : Show adverts

### Likes

- **GET** `/my/likes`: `UserController@myLikes` : Get list of my likes

### Downloads

- **GET** `/download/file/{id}`: `UserController@downloadFile` : Download a zip file attached to a post

- - > where {id} is the id of the post the file belongs

### Sales

- **GET** `/my/sales`: `UserController@mySales` : Get list of sales

### Purchased Items

- **GET** `/my/purchased/items`: `UserController@purchasedItems` : Get list of purchased items

### Products

- **GET** `/my/products`: `UserController@myProducts` : Get list of products by user

### Purchased Contents

- **GET** `/my/purchases`: `UserController@myPurchases` : Get list of purchased contents

### Downloads (Messages)

- **GET** `/download/message/file/{id}`: `MessagesController@downloadFileZip` : Download zip file attached to a message

### Profile

- **GET** `/profile`: `UserController@profile` : Get user profile
- **GET** `/profile/{media}`: `UserController@profile` : Get user profile showing {media} (where media is photos, videos, audio, shop, files, or epub)

### Creator

- **GET** `/creators/{type?}`: `HomeController@creators` : Get list of creators or filter by {type} where type -> featured, new, more-active, free

- - > {type} can be empty if filtering in not needed

### Category

- **GET** `/category/{slug}/{type?}`: `HomeController@category` : Get category

- - > (where slug -> artist, designer, drawing-and-painting, developer ,animation, photography, video-and-film ,podcasts ,others ,writing and type -> featured, new, free, more-active)
- - - > https://api.myklan.africa/public/api/category/developer?gender=male (search by gender)

- - - > https://api.myklan.africa/public/api/category/developer/free?gender=male

- - - > {type?} can be empty if filtering in not needed

### Categories

- **GET** `/categories`: `HomeController@categories` : Get list of categories

### List Creators

- **GET** `/listcreators`: `HomeController@refreshCreators` : Get list of creators

### Notifications

- **GET** `/notifications/{type?}`: `UserController@notifications` : Get notifications where {type} -> likes, tips, mentions, subsciptions, Live streaming

- - > {type} can be empty if filtering in not needed

### Verification

- **POST** `/settings/verify/account`: `UserController@verifyAccountSend` : Verify account

### Wallet

- **GET** `/my/wallet`: `AddFundsController@wallet` : Get wallet and balance info
- **GET** `/deposits/invoice/{id}`: `UserController@invoiceDeposits` : Get deposit invoice by id

### Shop []

- **GET** `/shop`: `ProductsController@index` : Get shop
- **GET** `/shop/product/{id}`: `ProductsController@show` : Get product by id
- **POST** `/add/physical/product`: `ProductsController@storePhysicalProduct` : Add physical product
- **POST** `/add/digital/product`: `ProductsController@storeDigitalProduct` : Add digital product
- **POST** `/add/custom/content`: `ProductsController@storeCustomContent` : Add custom product
- **POST** `/edit/product/{id}`: `ProductsController@update` : Edit Product
- **POST** `/delete/product/{id}`: `ProductsController@destroy`: Delete product
- **POST** `/buy/now/product`: `ProductsController@buy` : Buy product
- **POST** `/delivered/product/{id}`: `ProductsController@deliveredProduct` : Confirm ordered product as delivered
- **POST** `/reject/order/{id}`: `ProductsController@rejectOrder` : Reject product order

### Subscribers

- **GET** `/my/subscribers`: `UserController@mySubscribers` : Get list of subscribers

### Payments

- **GET** `/my/payments`: `UserController@myPayments` : Get list of payments
- **GET** `/my/payments/received`: `UserController@myPayments` : Get list of payments received
- **GET** `/payments/invoice/{id}`: `UserController@invoice` : Get pay invoice

### Messages []

- **GET** `/messages`: `MessagesController@inbox` : Get current message in inbox
- **GET** `/messages/{id}/{username?}`: `MessagesController@messages` : Get all message from/to a user by id (where id is a number)
- **POST** `/message/send`: `MessagesController@send` : Send message to a user
- **GET** `/messages/search/creator`: `MessagesController@searchCreator` : Search for creator in messages page
- **POST** `/message/delete`: `MessagesController@delete` : Delete a message
- **POST** `/conversation/delete/{id}`: `MessagesController@deleteChat` : Delete conversation with a user

### Tips []

- **POST** `/send/tip`: `TipController@send` : Send tip to a user

### Other User Profile

- **GET** `/{slug}`: `UserController@userProfile` (where slug is a string) : Get profile of a user by username
- **GET** `/{slug}/{media}`: `UserController@userProfile` : Get profile of a user by username along with specific media type(where slug is a string and media is photos, videos, audio, shop, files, or epub)

### Post Details

- **GET** `/{slug}/post/{id}`: `UserController@postDetail` (where slug is a creator username and id is id of the post) : View specific post of a user subscribed to
