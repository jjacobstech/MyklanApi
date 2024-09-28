# MyklanApi

## **_Myklan Api V1_**

## **_Myklan Api Routes_**

## Endpoints

### Public Routes

### Login

- **POST** `/login`: Handles login.

- - **_Fields_**

- - - > Fields
- - - > email,
- - - > password

### Register

- **POST** `/register`: Handles registration.

- - **_Fields_**

- - - > name,
- - - > email
- - - > password
- - - > agree : `1(this is constant)`
- - - > g-recaptcha-response : `recaptcha response if recaptcha is activated by admin`

### Languages

- **GET** `/languages`: Returns a list of languages.

### 2FA Verification

- **POST** `/verify/2fa`: Handles 2FA authentication

- - **_Fields_**

- - - > code : `user 2FA code received by email`
- - - > user : `this is the id of the user gotten after from the login route`

### 2FA Resend

- **POST** `/2fa/resend`: Handles resend of 2FA code

- - **_Fields_**

- - - > user : `id of the user currently trying to get 2fa code`

### Private Routes (Require Authentication - Bearer Token)

### Logout

- **GET** `/logout`: Handles logout.

### Password Update

- **POST** `/update/password`: Handles password change

- - **_Fields_**

- - - > old_password
- - - > new_password(minimum of 6 characters)

### Password Reset

- **POST** `/password/email` : `ForgotPasswordController@sendResetLinkEmail` : `Send a password reset link to the user's email address.`

- - **_Fields_**

- - - > email : `this is the email to send password reset link to`

### User Endpoints

- **GET** `/user` : Returns the current user's profile.

- **POST** `/update/user` : Updates the current user's settings.

- - **_Fields_**

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
- - - > countries_id : `Note: 159 for Nigeria - to get the id of countries use endpoint /countries route`
- - - > city
- - - > address
- - - > zip - `zip/postal no`
- - - > profession
- - - > birthdate  : `Format - 09/13/2004 - MM/DD/YYYY`
- - - > categories_id
- - - > company
- - - > story
- - - > gender
- - - > language : `Options - en,es - to get the abbreviation of languages use endpoint /languages route`
- - - > hide_name : `Options - Yes or No`

- **GET** `/blocked/countries` : Returns a list of blocked countries.

- **POST** `/block/countries` : Blocks a country.

- - **_Fields_**

- - - > countries : `value should be in this format "NG,GH" if adding more that one country,another country can be added by adding a comma and a the country_code, to get the country_code available use '/countries - GET' route`

### Dashboard

- **GET** `/dashboard` : Returns the dashboard data.

- **GET** `/get/data/chart/{slug}` : Returns chart data.

- - **_Fields_**

- - - > range :`month, lastmonth, year`

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

- - **_Fields_**

- - - > avatar - `image to be uploaded`

- **POST** `/upload/cover`: `UserController@uploadCover` : Uploads a cover image.

- - **_Fields_**

- - - > cover :`image to be uploaded`

### Subscriptions

- **GET** `/mysubscriptions`: `UserController@mySubscriptions` : Returns the current user's subscriptions.

### Buy Subscription

- **POST** `/buy/subscription`: `SubscriptionsController@buy` : Buys a subscription.

- - **_Fields_**

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

### Posts

 **GET** `/pin/post/{id}`: `UserController@pinPost` : Pin user owned post to profile.

- - - > `where {id} is id of post to like`

**GET** `/myposts`: `UserController@myPosts` : Returns the current user's posts.
**POST** `/post`: `UpdatesController@create` : Creates a new post.

- **_Fields _**

- - - > fileuploader-list-photo[] : `multi file uploader for posting images, audio, videos : max 500MB`
- - - > zip : `zip file for upload`
- - - > epub : `epub file upload`
- - - > description  : `video url from youtube can also be used here - Format :  url = https://www.youtube.com/watch?v=niaMHbhsV5E  ,Extra text = Pretty by Astrid s. This will give https://www.youtube.com/watch?v=niaMHbhsV5E Pretty by Astrid s`
- - - > title
- - - > price  : `leave empty if not adding price`

**GET** `/post/edit/{id}`: `UpdatesController@edit`: Returns a post for editing or Viewing by ID.

**POST** `/post/edit`: `UpdatesController@postEdit`: Updates a post.

- **_Fields _**

- - - > id  : `id of post to edit`
- - - > zip : `zip file for upload`
- - - > epub : `epub file upload`
- - - > description  : `video url from youtube can also be used here - Format :  url = https://www.youtube.com/watch?v=niaMHbhsV5E  ,Extra text = Pretty by Astrid s. This will give https://www.youtube.com/watch?v=niaMHbhsV5E Pretty by Astrid s`
- - - > title
- - - > price : `leave empty if not adding price`

- **POST** `/upload/media`: `UploadMediaController@store` : Media uploader for editing post

- **_Fields _**

- - - > post_id  : `id of post to upload for`

- - - > media : `file to upload` : `allowed extension ,where extension = [.jpg, .jpeg, .png, .ief, .mp3, .mpeg, .mp4] etc`

**POST** `/delete/media`: `UploadMediaController@delete` : Media delete to delete a specific media on a post : For editing post

- **_Fields _**

- - - > file : `name of file to delete` : `ex. file_name.extension ,where extension = [.jpg, .png, .zip , .ief, .mp3] etc`

**POST** `/post/delete/{id}`: `UpdatesController@delete`: Deletes a post.

- - - > `where {id} is id of post to delete`

**POST** `/like/post/{id}`: `UserController@like` : Like a post

- - - > `where {id} is id of post to like`

### Post Details

- **GET** `/{slug}/post/{id}`: `UserController@postDetail` (where slug is a creator username and id is id of the post) : View specific post

### Dark Mode

- **GET** `/mode/{mode}`: `HomeController@darkMode` : Switch between light and dark mode

### Bookmarks

- **POST** `/add/bookmark/{id}`: `HomeController@addBookmark` : Book mark a post
- **GET** `/my/bookmarks`: `UserController@myBookmarks` : Get list of bookmarks

### Settings Conversations

- **GET** `/settings/conversations`: `UserController@settingsConversations` : Load User conversation settings page

- - > `preloaded_file in response is the data of media for welcome message`

- **POST** `/settings/conversations/update`: `UserController@updateConversations` : Update conversation settings

- - **_Fields_**

- - - > allow_dm : `1 / 0`
- - - > send_welcome_message : `1 / 0`
- - - > message : `welcome message text`
- - - > price_welcome_message : `set price for welcome message`

### Welcome Message Media [Use for settings media uploads operations in settings conversation]

- **POST** `/upload/welcome/message/media`: `UploadMediaWelcomeMessageController@store` : Media uploader for welcome message

- - **_Fields_**

- - - > media : `file to upload for welcome message` : `allowed extensions = [.jpg, .png, .zip , .ief, .mp3, .pdf, .zip, .epub, .mp4] etc`

- **POST** `/delete/welcome/message/media`: `UploadMediaWelcomeMessageController@delete` : Media delete for welcome message

- - **_Fields_**

- - - > file : `file to upload for welcome message` : `ex. file_name.extension ,where extension = [.jpg, .png, .zip , .ief, .mp3, .pdf, .zip, .epub, .mp4] etc`

### Delete Cover

- **POST** `/delete/cover`: `UserController@deleteImageCover` : Delete cover image

### Account [To be Last test]

- **POST** `/account/delete`: `UserController@deleteAccount` : Delete account

- - **_Fields_**

- - - > password : `user password`

### Transfer Balance

- **POST** `/transfer/balance`: `UserController@transferBalance` : Transfer balance to wallet

- - **_Fields_**

- - - > amount :`amount to transfer`

### Reports

- **POST** `/report/item`: `ProductsController@report` : Report item in shop

- - **_Fields_**

- - - > id :`product to report`
- - - > reason :`item_not_received, spoofing, copyright, privacy_issue, violent_sexual, fraud`

- **POST** `/report/post`: `UpdatesController@report` : Repost post

- - **_Fields_**

- - - > id : `post to report`
- - - > reason : `copyright, privacy_issue, violent_sexual`

- **POST** `/report/creator`: `UserController@reportCreator` : Report creator

- - **_Fields_**

- - - > id : `user to report`
- - - > reason : `spoofing, copyright, privacy_issue, violent_sexual, spam, fraud, under_age`

### Pay-Per-View

- **POST** `/send/ppv`: `PayPerViewController@send` : Pay for a post or message

- - **_Fields_**

- - - > id : `id of post or message to pay for`
- - - > amount : `amount to pay`
- - - > payment_gateway_ppv : `value = wallet`
- - - > isMessage : `specifies if  payment is for a message or not. value = 1  if it is a message, leave empty if not a message`

### Comments

- **GET** `/load/comments`: `CommentsController@loadmore` : Get comments for a post

- - **_Fields_**

- - - > post_id  : `post to load comment from`

- **POST** `/comment/post`: `CommentsController@store` : Comment on a post

- - **_Fields_**

- - - > post_id : `post to comment on`
- - - > comment : `comment from user`
- - - > isReply : `id of comment / reply, to reply to` :  `this format [@techdemigod39 Happy testing reply ]should he used  when commenting to a reply under a comment to form a thread`

- **POST** `/edit/comment`: `CommentsController@edit` : Edit comment

- - **_Fields_**

- - - > id : `comment or reply to edit`
- - - > comment : `text to replace former text`
- - - > isReply : `true / false` :  `if true the the reply with the specified id is edited ,if false the comment with the specified id is edited`

- **POST** `/delete/comment/{id}`: `CommentsController@destroy` : Delete comment

- - - > `where {id} is the id of the post to be deleted`

- **POST** `/like/comment`: `CommentsController@like` : Like comment

- - **_Fields_**

- - - > comment_id : `comment or reply to like`
- - - > typeComment : `value = isComment if like is for a comment , value = isReply if like is for a reply`

### Restrict User

- **POST** `/restrict/user/{id}`: `UserController@restrictUser` : Restrict a user

- - > `where {id} is user_id of user to restrict, run first time to restrict, run again to remove restriction`

### Restrictions

- **GET** `/settings/restrictions`: `UserController@restrictions` : Get a list of restricted users

### Subscription Settings

- **GET** `/settings/subscription`: `UserController@settingsSubscription` : Get list of subscription settings
- **POST** `/settings/subscription`: `UserController@saveSubscription` : Update subscription settings

- - **_Fields_**

- - - > price_weekly : `price for weekly subscription`
- - - > status_weekly : `status for weekly subscription 1 / 0`
- - - > price : `price for monthly subscription`
- - - > price_quaterly : `price for quaterly subscription`
- - - > status_quaterly : `status for quaterly subscription 1 / 0`
- - - > price_biannually : `price for bianuually subscription`
- - - > status_biannually : `status for biannually subscription 1 / 0`
- - - > price_yearly : `price for yearly subscription`
- - - > status_yearly : `status for yearly subscription 1 / 0`
- - - > free_subscription : `yes / no`

### Privacy and Security

- **GET** `/privacy/security`: `UserController@privacySecurity` : Get list of privacy settings [Refine this]

- **POST** `/update/privacy/security`: `UserController@savePrivacySecurity` : Update privacy settings
  
- - **_Fields_**

- - - > hide_profile : `yes / no`
- - - > hide_last_seen  : `yes / no`
- - - > hide_count_subscribers : `yes / no`
- - - > hide_my_country : `yes / no`
- - - > show_my_birthdate : `yes / no`
- - - > active_status_online : `yes / no`
- - - > two_factor_auth : `yes / no`
- - - > posts_privacy : `1 / 0`

### Advertising

- **GET** `/adverts`: `AdvertisingController@show` : Show advertisements

### Likes

- **GET** `/my/likes`: `UserController@myLikes` : Get list of my likes

### Downloads

- **GET** `/download/file/{id}`: `UserController@downloadFile` : Download a zip file attached to a post

- - > `where {id} is the id of the post the file belongs`

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

### Other User Profile

- **GET** `/{slug}`: `UserController@userProfile` (where slug is a string) : Get profile of a user by username
- **GET** `/{slug}/{media}`: `UserController@userProfile` : Get profile of a user by username along with specific media type(where slug is a string and media is photos, videos, audio, shop, files, or epub)

### Creator

- **GET** `/creators/{type?}`: `HomeController@creators` : Get list of creators or filter by {type} where type -> featured, new, more-active, free

- - - > `{type} can be empty if filtering in not needed`

- - **_Fields_**

- - - > q : `search query, can seach by name or username`

### Category

- **GET** `/category/{slug}/{type?}`: `HomeController@category` : Get category

- - - > `(where slug -> artist, designer, drawing-and-painting, developer ,animation, photography, video-and-film ,podcasts ,others ,writing and type -> featured, new, free, more-active)`
- - - > `<https://api.myklan.africa/public/api/category/developer?gender=male> (search by gender)`

- - - > `<https://api.myklan.africa/public/api/category/developer/free?gender=male>`

- - - > `{type?} can be empty if filtering is not needed`

### Categories

- **GET** `/categories`: `HomeController@categories` : Get list of categories of Creators

### List Creators

- **GET** `/listcreators`: `HomeController@refreshCreators` : Get list of creators

### Notifications

- **GET** `/notifications/{type?}`: `UserController@notifications` : Get notifications
- - - > `where {type} -> likes - 2, tips - 5, mentions - 16, subscriptions - 1, Live streaming - 14, comments - 3, ppvPost - 7, ppvMessage - 6, items - 15, verified - 18`

- - - > `{type} can be empty if filtering in not needed`



- **GET** `notifications/settings`: `UserController@notificationSettings` : Get view for Notifications Settings

- **POST** `update/settings/notifications`: `UserController@settingsNotifications` : Update Notifications Settings

- - **_Fields_**

- - > `if fields are left empty value = no`

- - - > notify_new_subscriber : `yes / no`
- - - > notify_liked_post : `yes / no`
- - - > notify_liked_comment : `yes / no`
- - - > notify_commented_post : `yes / no`
- - - > notify_new_tip : `yes / no`
- - - > notify_new_ppv : `yes / no`
- - - > notify_live_streaming : `yes / no`
- - - > notify_mentions : `yes / no`
- - - > email_new_subscriber : `yes / no`
- - - > email_new_tip : `yes / no`
- - - > email_new_ppv : `yes / no`
- - - > notify_email_new_post : `yes / no`

- **GET** `notifications/delete`: `UserController@deleteNotifications` : Delete Notifications

### Verification

- **POST** `/settings/verify/account`: `UserController@verifyAccountSend` : Verify account

- - **_Fields_**

- - - > address
- - - > city
- - - > zip : `zip/postal code`
- - - > image : `image of ID Document(passport or drivers license)`
- - - > image_reverse : `back image of ID Document(passport or drivers license)`
- - - > image_selfie : `image of user holding ID Documents and sign`
- - - > form_w9 : `required if country id =  1 (US) that is if user is Us Citizen`

### Wallet

- **GET** `/my/wallet`: `AddFundsController@wallet` : Get wallet and balance info

- **GET** `/deposits/invoice/{id}`: `UserController@invoiceDeposits` : Get deposit invoice by id

### Shop

- **GET** `/shop`: `ProductsController@index` : Get shop
- **GET** `/shop/product/{id}`: `ProductsController@show` : Get product by id
- **POST** `/add/physical/product`: `ProductsController@storePhysicalProduct` : Add physical product

- - **_Fields_**

- - - > fileuploader-list-preview[]  : `multi image uploader for product preview, max images = 2,  mimes:png,jpg,jpeg,ief`
- - - > name
- - - > tags : `product tags , format - {1},{2},{3} where 1,2,3 are words seperated ba a comma respectively`
- - - > category : `default value = 1` : `product categories = 1 -> physical, 2 -> digital, 3 -> custom`
- - - > description
- - - > price
- - - > quantity
- - - > box_contents
- - - > shipping_fee
- - - > country_free_shipping : `id of country to allow free shipping for`

- **POST** `/add/digital/product`: `ProductsController@storeDigitalProduct` : Add digital product

- - **_Fields_**

- - - > preview[]  : `multi image uploader for product preview, max images = 2,  mimes - png,jpg,jpeg,ief`
- - - > productFile  : `digital product file uploader for the digital file being put up for sale , mimes  of digital product- png,jpg,jpeg,ief,mp3,mp4,mov,mkv,pdf,zip`
- - - > name
- - - > tags : `product tags , format - {1},{2},{3} where 1,2,3 are words seperated ba a comma respectively`
- - - > category : `default value = 2` : `product categories = 1 -> physical, 2 -> digital, 3 -> custom`
- - - > description
- - - > price

- **POST** `/add/custom/content`: `ProductsController@storeCustomContent` : Add custom product

- - **_Fields_**

- - - > fileuploader-list-preview[]  : `multi image uploader for product preview, max images = 2,  mimes:png,jpg,jpeg,ief`
- - - > name
- - - > tags : `product tags , format - {1},{2},{3} where 1,2,3 are words seperated ba a comma respectively`
- - - > category : `default value = 3` : `product catgories = 1 -> physical, 2 -> digital, 3 -> custom`
- - - > description
- - - > price
- - - > quantity
- - - > delivery_time

- **POST** `/edit/product/{id}`: `ProductsController@update` : Edit Product

- - > `where {id} is the product to edit`

- - **_Fields_**
- - - > name
- - - > tags
- - - > description
- - - > price
- - - > category :  `product categories = 1 -> physical, 2 -> digital, 3 -> custom`
- - - > shipping_fee : `required if product type = physical`
- - - > delivery_time : `required if product type = custom`
- - - > quantity : `required if product type = physical`
- - - > box_contents : `required if product type = physical product`
- - - > country_free_shipping : `id of country to allow free shipping for`
- - - > status : `1 / 0` : `if status is not det to 1 it automatically resolves to 0 which makes the product inactive`

- **POST** `/delete/product/{id}`: `ProductsController@destroy`: Delete product

- - > `where {id} is the product to delete`

- **POST** `/buy/now/product`: `ProductsController@buy` : Buy product

- - **_Fields_**

- - - > id : `id of product to buy`
- - - > description_custom_content : `required if product type = custom`
- - - > address : `required if product type = physical`
- - - > city : `required if product type = physical`
- - - > zip : `required if product type = physical`
- - - > phone : `required if product type = physical`

- **POST** `/delivered/product/{id}`: `ProductsController@deliveredProduct` : Confirm ordered product as delivered

- - - > `where {id} is the id of the delivered product`

- **POST** `/reject/order/{id}`: `ProductsController@rejectOrder` : Reject product order

- - - > `where {id} is the id of the order to reject`

- **POST** `/product/download/{id}`: `ProductsController@download` : Download digital product

- - - > `where {id} is the id of the digital product to download` : `only works for digital products`

### Subscribers

- **GET** `/my/subscribers`: `UserController@mySubscribers` : Get list of subscribers

### Payments

- **GET** `/my/payments`: `UserController@myPayments` : Get list of payments
- **GET** `/my/payments/received`: `UserController@myPayments` : Get list of payments received
- **GET** `/payments/invoice/{id}`: `UserController@invoice` : Get pay invoice

### Messages

- **GET** `/messages`: `MessagesController@inbox` : Get current messages in inbox : `replication of https://myklan.africa/messages`

- **GET** `/messages/{id}/{username?}`: `MessagesController@messages` : Get all message from/to a user by id (where id is a number)

- - - > `where {id} is the user id of the user to get messages to/from`

- **POST** `/message/send`: `MessagesController@send` : Send message to a user

- - **_Fields_**

- - - > fileuploader-list-media[] : `pictures, audio or video to send to user`
- - - > id_user : `id of user to send  message to`
- - - > message : `message to user`
- - - > zip : `zip file to send to user`
- - - > epub : `epub file to send to user`

- **GET** `/messages/search/creator`: `MessagesController@searchCreator` : Search for creator in messages page

- - **_Fields_**

- - - > user : `name of creator to search; with just 3 letter the search can be initiated`

- **POST** `/message/delete`: `MessagesController@delete` : Delete a message

- - **_Fields_**

- - - > message_id : `id of message to delete`

- **POST** `/conversation/delete/{id}`: `MessagesController@deleteChat` : Delete conversation with a user

- - - > `where {id} is the user id of the user to delete chats`

### Tips

- **POST** `/send/tip`: `TipController@send` : Send tip to a user : can be used in messaging and post

- - **_Fields_**

- - - > id : `user to send tip`
- - - > amount : `amount to send`
- - - > payment_gateway_tip : `value = wallet`

### Add Funds

- **POST** `/add/funds`: `AddFundsController@send` : Fund account balance

- - **_Fields_**

- - - > amount : `amount to add to balance`
- - - > payment_gateway : `currently = Flutterwave,Paystack; other gaveways are available but not currently activated` : `the other gateways are PayPal,,Stripe, Bank, CCBill, Coinpayments, Mercadopago, Mollie, Razorpay, Coinbase, NowPayments, Cardinity, Binance`
- - - > image : `required if:payment_gateway = Bank, mimes:jpg,gif,png,jpe,jpeg`
- - - > agree_terms :  `value = 1`

### Withdrawals
