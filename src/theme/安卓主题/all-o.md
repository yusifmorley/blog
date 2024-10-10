# 安卓主题参数变量介绍(英文)

此文档来源于 [项目](https://gitlab.com/attheme-glossary/database)

While creating themes for Android Telegram, you can find elements which variable
you don't know, or variables you don't know what they change. Worse yet, there
are no descriptions of the variables in the in-app editor, so you have to ask
someone who knows more about theming than you.

We started creating this glossary in order to collect variable descriptions in
one place. The glossary already has descriptions of many variables, but much
more are still to be described. And you can help to make it even better!

Every part of the glossary is [free software]. The source code of the website is
available on GitLab [here][website], and the most important part — the database
— is available on GitLab [here][database]. You can contribute to these parts by
opening merge requests against the repositories above, and once your merge
request is merged, you can instantly see your contribution live!

[free software]: https://en.wikipedia.org/wiki/Free_software
[website]: https://gitlab.com/attheme-glossary/website
[database]: https://gitlab.com/attheme-glossary/database

# Backgrounds

<glossary-variable color="red">

## windowBackgroundWhite

Sets the background almost everywhere except the chat screen background. For
example, it sets the background on the chats list screen or the background of
sections in Settings.

</glossary-variable>

<glossary-variable color="green">

## windowBackgroundGray

Sets the secondary background, e. g. in Settings, between sections or below
calls log if it doesn't fill the screen fully.

</glossary-variable>

<figure>

![](/images/backgrounds.0.png)

<figcaption>

The red areas show `windowBackgroundWhite` and the green areas show
`windowBackgroundGray`.

</figcaption>
</figure>

<glossary-variable color="gray">

## chat_wallpaper

Sets the background on the chat screen, accepts either an image or a color. You
must change _this variable_ so Telegram includes your wallpaper in your theme.
Changing the wallpaper in Settings → Chat Wallpaper won't include it in your
theme.

**Be careful:** if you set an image as a wallpaper, Telegram will compress it
every time you change any variable with the in-app editor. For this reason, you
must set your image again before you share your theme.

</glossary-variable>

<figure>

![](/images/backgrounds.1.png)

<figcaption>

Example of an image and a color as a chat screen wallpaper.

</figcaption>
</figure>

# Chat Screen

## Bubbles

<glossary-variable color="red">

### chat_selectedBackground

Sets the background underlay color when you selected a message by holding them.

</glossary-variable>

<figure>

![](/images/chatscreen.0.png)

<figcaption>

The red area shows `chat_selectedBackground`.

</figcaption>
</figure>

## Message panel

<glossary-variable color="red">

### chat_messagePanelBackground

Sets the color of the message panel background.

</glossary-variable>

<glossary-variable color="green">

### chat_messagePanelHint

Sets the color of the placeholder in the message panel that says “Message” or
“Broadcast”.

</glossary-variable>

<glossary-variable color="indigo">

### chat_messagePanelText

Sets the color of the text inside the message panel.

</glossary-variable>

<glossary-variable color="orange">

### chat_messagePanelSend

Sets the color of the send icon in the message panel.

</glossary-variable>

<glossary-variable color="blue">

### chat_messagePanelIcons

Sets the color of the icons inside the message panel.

</glossary-variable>

<glossary-variable color="brown">

### chat_fieldOverlayText

Sets the text color on message bar to join a channel or group or cancel a
voice/video message or mute/unmute a chat.

</glossary-variable>

<figure>

![](/images/chatscreen.1.png)

<figcaption>

The red area shows `chat_messagePanelBackground`, the green area shows
`chat_messagePanelHint`, the dark blue area shows `chat_messagePanelText`, the
orange area shows `chat_messagePanelSend`, the light blue area shows
`chat_messagePanelIcons`, and the brown underline shows `chat_fieldOverlayText`
(example of a channel).

</figcaption>
</figure>

## Emojis/stickers panel

If you change the variables from this subsection with the in-app editor, you
need to reopen the chat screen to see changes.

<glossary-variable color="red">

### chat_emojiPanelBackground

Sets the background color of panel for emojis, saved stickers, sticker packs in
preview and bot keyboard below message panel with alpha value been layered on
black.

</glossary-variable>

<glossary-variable color="green">

### chat_emojiPanelEmptyText

Sets the color of the “No recent” text if no emoji is used or list cleared and
recent list with clock icon is empty. To clear recent list, select and hold any
recent emoji that doesn't have skin tones variations and confirm Clear in
dialog.

</glossary-variable>

<glossary-variable color="indigo">

### chat_emojiPanelIcon

Sets the color of all icons in horizontally scrollable row below message panel
in emoji and sticker panel, except actually selected emoji set.

</glossary-variable>

<glossary-variable color="purple">

### chat_emojiPanelIconSelected

Sets the color of the emoji set selected icon.

</glossary-variable>

<glossary-variable color="orange">

### chat_emojiPanelIconSelector

Sets the color of a line that indicates actual emoji set on
chat_emojiPanelShadowLine.

</glossary-variable>

<glossary-variable color="blue">

### chat_emojiPanelBackspace

Sets the color of the backspace icon to delete last emoji added in message while
still editing.

</glossary-variable>

<glossary-variable color="brown">

### chat_emojiPanelStickerPackSelector

Sets the square background color on actual selected sticker pack.

</glossary-variable>

<figure>

![](/images/chatscreen.2.png)

<figcaption>

The red area shows `chat_emojiPanelBackground`, the green underline shows
`chat_emojiPanelEmptyText`, the dark blue area shows `chat_emojiPanelIcon`, the
purple underline shows `chat_emojiPanelIconSelected`, the orange area shows
`chat_emojiPanelIconSelector`, the light blue area shows
`chat_emojiPanelBackspace`, and the brown area shows
`chat_emojiPanelStickerPackSelector`.

</figcaption>
</figure>

Unfortunately, the next five variables can be changed only with
[.attheme editor](http://snejugal.ru/attheme-editor).

<glossary-variable color="red">

### chat_emojiPanelStickerSetName

Sets the color of sticker packs titles when scrolling.

</glossary-variable>

<glossary-variable color="green">

### chat_emojiPanelStickerSetNameIcon

Sets the color of the remove or setting icon beside group stickers title.

</glossary-variable>

<figure>

![](/images/chatscreen.3.png)

<figcaption>

The red underline shows `chat_emojiPanelStickerSetName` and the green area shows
`chat_emojiPanelStickerSetNameIcon`.

</figcaption>
</figure>

<glossary-variable color="red">

### featuredStickers_delButton

Sets the background of "Remove" button in Trending Stickers section.

</glossary-variable>

<glossary-variable color="indigo">

### featuredStickers_delButtonPressed

Sets the background of "Remove" button when pressed in Trending Stickers
section.

</glossary-variable>

<glossary-variable color="green">

### featuredStickers_unread

Sets the blue dot color near the sticker pack title.

</glossary-variable>

<figure>

![](/images/chatscreen.4.png)

<figcaption>

The red area shows `featuredStickers_delButton`, the dark blue area shows
`featuredStickers_delButtonPressed`, and the green area shows
`featuredStickers_unread`.

</figcaption>
</figure>

## Bot keyboard

The background is `chat_emojiPanelBackground`.

<glossary-variable color="red">

### chat_botKeyboardButtonText

Sets the text color on buttons in a panel below message bar, if programmed in a
bot.

</glossary-variable>

<glossary-variable color="indigo">

### chat_botKeyboardButtonBackground

Sets the background color of the buttons.

</glossary-variable>

<glossary-variable color="green">

### chat_botKeyboardButtonBackgroundPressed

Sets the button background color when tapped and is the selector of these
buttons. it replaced the default color, so alpha channel less than 255 will make
the button transparent.

</glossary-variable>

<figure>

![](/images/chatscreen.5.png)

<figcaption>

The red underlines show `chat_botKeyboardButtonText`, the dark blue areas show
`chat_botKeyboardButtonBackground`, and the green area shows
`chat_botKeyboardButtonBackgroundPressed`.

</figcaption>
</figure>

# Contacts

The next two variables are used not only in Contacts, but primarily they are
seen here.

<glossary-variable color="green">

## windowBackgroundWhiteIcon

Sets the color of icons.

</glossary-variable>

<glossary-variable color="red">

## graySection

Sets the header background color like “Contacts”. The title on this header is
set by `windowBackgroundWhiteGrayText2`.

</glossary-variable>

<figure>

![](/images/contacts.0.png)

<figcaption>

Red — `graySection`, green — `windowBackgroundWhiteIcon`.

</figcaption>
</figure>

## Fast scroll

<glossary-variable color="green">

### fastScrollInactive

Sets the color of the scrollbar when not pressed.

</glossary-variable>

<glossary-variable color="red">

### fastScrollActive

Sets the color of the scrollbar when you hold and move it and the bubble that
contains the letter on where you are.

</glossary-variable>

<glossary-variable color="orange">

### fastScrollText

Sets the color of the letter inside the bubble when you hold and move the
scrollbar.

</glossary-variable>

<figure>

![](/images/contacts.1.png)

<figcaption>

Green — `fastScrollInactive`, red — `fastScrollActive`, orange —
`fastScrollText`.

</figcaption>
</figure>

## “Invite friends” screen

<glossary-variable color="red">

### contacts_inviteBackground

Sets the background of the bottom hint on the “Invite friends” screen.

</glossary-variable>

<glossary-variable color="yellow">

### contacts_inviteText

Sets the text color of the hint.

</glossary-variable>

<figure>

![](/images/contacts.2.png)

<figcaption>

Red — `contacts_inviteBackground`, yellow — `contacts_inviteText`.

</figcaption>
</figure>

# Attach Screens

This part of glossary is about attach screens.

## Files

<glossary-variable color="green">

### files_folderIcon

Sets the folder icon.

</glossary-variable>

<glossary-variable color="red">

### files_folderIconBackground

Sets the circle background below the folder icon.

</glossary-variable>

<glossary-variable color="blue">

### files_iconText

Sets the file icon extension text.

</glossary-variable>

<figure>

![](/images/attachscreens.0.png)

<figcaption>

Green — `files_folderIcon`, red — `files_folderIconBackground`, blue —
`files_iconText`.

</figcaption>
</figure>

## Location

<glossary-variable color="red">

### location_markerX

Sets the color of the × below the red location icon when you move it across the
map.

</glossary-variable>

<glossary-variable color="green">

### location_sendLocationBackground

Sets the background of the button beside the “Send selected/your current
location”.

**Important note:** you must re-enter the screen to see the actual color of the
button if you change the variable with the in-app editor.

</glossary-variable>

<glossary-variable color="blue">

### location_sendLocationIcon

Set the icon on the button.

</glossary-variable>

<figure>

![](/images/attachscreens.1.png)

<figcaption>

Red — `location_markerX`, green — `location_sendLocationBackground`, blue —
`location_sendLocationIcon`.

</figcaption>
</figure>

## Music

<glossary-variable color="blue">

### musicPicker_buttonBackground

The background of the icon from your music gallery.

</glossary-variable>

<glossary-variable color="yellow">

### musicPicker_buttonIcon

The icon music inside `musicPicker_buttonBackground`.

</glossary-variable>

<glossary-variable color="green">

### musicPicker_checkbox

The background of the check on the selected music.

</glossary-variable>

<glossary-variable color="red">

### musicPicker_checkboxCheck

The check icon inside musicPicker_checkbox.

</glossary-variable>

<figure>

![](/images/attachscreens.2.png)

<figcaption>

Blue — `musicPicker_buttonBackground`, yellow — `musicPicker_buttonIcon`, green
— `musicPicker_checkbox`, red — `musicPicker_checkbox`.

</figcaption>
</figure>

<glossary-variable color="blue">

### picker_badge

The background of the send counter.

</glossary-variable>

<glossary-variable color="yellow">

### picker_badgeText

The number inside the circle.

</glossary-variable>

<glossary-variable color="green">

### picker_disabledButton

The color of the “send” button when you haven't picked anything yet.

</glossary-variable>

<glossary-variable color="red">

### picker_enabledButton

the color of the “send” button when you have picked items.

</glossary-variable>

<figure>

![](/images/attachscreens.3.png)

<figcaption>

Green — `picker_badge`, yellow — `picker_badgeText`, red —
`picker_disabledButton`, blue — `picker_enabledButton`.

</figcaption>
</figure>

# In-app Music Player

The in-app editor opener button is overlaid when you open the editor. All player
variables are available on the chats list screen, or you can use
[.attheme editor](http://snejugal.ru/attheme-editor) to change the variables.

## Action bar

If you tap the top-left icon, you'll see an old-like player with action bar. It
also appears when the playlist is big and you scroll the list.

<glossary-variable color="red">

### player_actionBar

Set the same things actionBarDefault, actionBarDefaultIcon,
actionBarDefaultTitle, actionBarDefaultSubtitle and actionBarDefaultSelector
respectively do.

</glossary-variable>

<glossary-variable color="purple">

### player_actionBarItems

</glossary-variable>

<glossary-variable color="yellow">

### player_actionBarTitle

</glossary-variable>

<glossary-variable color="blue">

### player_actionBarSubtitle

</glossary-variable>

<glossary-variable color="green">

### player_actionBarSelector

</glossary-variable>

<glossary-variable color="orange">

### player_actionBarTop

Sets the status bar background color on Android 5.0 and higher, and, unlike in
any other case, it's not darkened by 20% (if you want to do it, set the value to
0, 0, 0, 51). Setting the alpha channel of this variable to zero fallbacks to
player_actionBar.

</glossary-variable>

<figure>

![](/images/musicplayer.0.png)

<figcaption>

The red area shows `player_actionBar`, the purple areas show
`player_actionBarItems”`, the yellow area shows `player_actionBarTop`, the blue
circle shows `player_actionBarSelector`, the green underline shows
`player_actionBarTitle`, and the orange underline shows
`player_actionBarSubtitle`.

</figcaption>
</figure>

## Playlist panel

For the blue-to-pink area, see the Action Bar subsection.

For the gray-to-green area, see the Placeholder subsection.

<glossary-variable color="red">

### player_background

Sets the background of the panel and also the seekbar panel.

</glossary-variable>

## Seekbar

<glossary-variable color="blue">

### player_progress

Sets the played part indicator.

</glossary-variable>

<glossary-variable color="brown">

### player_progressBackground

Sets the unplayed part indicator.

</glossary-variable>

<glossary-variable color="lime">

### player_time

Sets the color of the track duration and the played part time.

</glossary-variable>

<glossary-variable color="orange">

### player_button

Sets the color of non-pressed or inactive buttons.

</glossary-variable>

<glossary-variable color="pink">

### player_buttonActive

Sets the color of pressed or active buttons.

</glossary-variable>

## The list

This subsection doesn't describe new variables, these variables aren't used only
here, their primary usage can be found in other sections of the glossary.

<glossary-variable color="purple">

### windowBackgroundWhiteBlackText

Sets the track title color.

</glossary-variable>

<glossary-variable color="indigo">

### windowBackgroundWhiteGrayText2

Sets the color of the performer's name.

</glossary-variable>

<glossary-variable color="green">

### chat_inLoader

Sets the background color of play/pause buttons on the list.

</glossary-variable>

<glossary-variable color="green">

### chat_inBubble

Sets the icon color of play/pause buttons on the list.

</glossary-variable>

<glossary-variable color="gray">

### actionBarDefaultSubmenuBackground

Sets the background of submenus, e. g. when you tap the reverse button. The
icons there are set by `player_button` and `player_buttonActive`.

</glossary-variable>

<figure>

![](/images/musicplayer.1.png)

<figcaption>

The red area shows `player_background`, the blue gray underline shows
`player_progress`, the brown underline shows `player_progressBackground`, the
lime underlines show `player_time`, the orange areas show `player_buttonActive`,
the pink areas show `player_buttonActive`, the purple underlines show
`windowBackgroundWhiteBlackText`, the blue underlines show
`windowBackgroundWhiteGrayText2`, the green circles show `chat_inLoader`. For
gradient-stroked areas see the top of this subsection.

</figcaption>
</figure>

## Placeholder

You see the placeholder when the track doesn't have a cover.

<glossary-variable color="red">

### player_placeholderBackground

Sets the background color of the placeholder.

</glossary-variable>

<glossary-variable color="blue">

### player_placeholder

Sets the color of the placeholder icon.

</glossary-variable>

<figure>

![](/images/musicplayer.2.png)

<figcaption>

The red area shows `player_placeholderBackground` and the blue area shows
`player_placeholder`.

</figcaption>
</figure>

## Top panel

When you start playing a track or a voice message, a panel at the top and below
the action bar with audio controls appears. This subsection is about this panel.

<glossary-variable color="red">

### inappPlayerBackground

Sets the background color of the in-app player panel.

</glossary-variable>

<glossary-variable color="green">

### inappPlayerPlayPause

Sets the color of the play/pause button of the in-app player panel.

</glossary-variable>

<glossary-variable color="blue">

### inappPlayerPerformer

Sets the text color of who performed the audio/song playing on the in-app player
panel.

</glossary-variable>

<glossary-variable color="purple">

### inappPlayerTitle

Sets the text color on the in-app player panel: for songs it sets the color
song's name color, for voice messages shows when it was sent, for example
yesterday at 08:05 A.M.

</glossary-variable>

<glossary-variable color="orange">

### inappPlayerClose

Sets the color of the close button inside the in-app player panel.

</glossary-variable>

<figure>

![](/images/musicplayer.3.png)

<figcaption>

The red area shows `inappPlayerbackground`, the green area shows
`inappPlayerPlayPause`, the orange area shows `inappPlayerClose`, the blue
underline shows `inappPlayerPerformer`, and the purple area shows
`inappPlayerTitle`.

</figcaption>
</figure>

**Note by @Ra1nb0wD4sh:** `inappPlayerClose` affects the color of the 2x
playback toggle (appeared in 4.8.10) while it's in disabled state.
`inappPlayerPlayPause` affects the color it has when enabled.

<figure>

![](/images/musicplayer.4.png)

<figcaption>

The 2x playback toggle

</figcaption>
</figure>

# Settings

<glossary-variable color="red">

## windowBackgroundGrayShadow

Sets the shadow color between sections in Settings.

</glossary-variable>

<figure>

![](/images/settings.0.png)

<figcaption>

The red area shows `windowBackgroundGrayShadow`.

</figcaption>
</figure>

## Icons

<glossary-variable color="red">

### changephoneinfo_image

Sets the color of two SIM-cards and arrow between them in Settings → Phone.

</glossary-variable>

<glossary-variable color="green">

### sessions_devicesImage

Sets the color of phone and tablet image when you signed in only on one device,
shown in Settings → Privacy and Security → Active Sessions.

</glossary-variable>

<figure>

![](/images/settings.1.png)

<figcaption>

The red area shows `chagephoneinfo_image` and the green area shows
`sessions_devicesImage`.

</figcaption>
</figure>

## Stickers and Themes sections

<glossary-variable color="blue">

### stickers_menu

Sets the color of three dots icon beside a sticker pack or a theme.

</glossary-variable>

<glossary-variable color="red">

### stickers_menuSelector

Sets the ripple color when you tap the three dots icon.

</glossary-variable>

<figure>

![](/images/settings.2.png)

<figcaption>

The blue area shows `stickers_menu` and the red area shows
`stickers_menuSelector`.

</figcaption>
</figure>

<glossary-variable color="orange">

### featuredStickers_addedIcon

Sets the color of the check mark you can see beside an added sticker pack or
selected theme.

</glossary-variable>

<glossary-variable color="red">

### featuredStickers_addButton

Sets the background of the “Add” buttons.

</glossary-variable>

<glossary-variable color="blue">

### featuredStickers_addButtonSelected

Sets the background of an “Add” button when you press the button.

</glossary-variable>

<glossary-variable color="green">

### featuredStickers_buttonText

Sets the color of the “Add” or “Remove” (on chat emoji panel) text on buttons.

</glossary-variable>

<glossary-variable color="purple">

### featuredStickers_buttonProgress

Sets the color of the progress circle when a sticker pack is being added or
removed (on chat emoji panel).

</glossary-variable>

<figure>

![](/images/settings.3.png)

<figcaption>

The red area shows `featuredStickers_addButton`, the blue area shows
`featuredStickers_addButtonSelected`, the green areas show
`featuredStickers_buttonText`, the orange area shows
`featuredStickers_addedIcon`, the purple area shows
`featuredStickers_buttonProgress`.

</figcaption>
</figure>

# Obsolete variables

These variables once were used, but now they've been removed from Telegram
because their elements were removed or replaced with other variables.

- `listSelector` — it was merged with `listSelectorSDK21`;
- `player_seekBarBackground` — the element was removed;
- `player_duration` — the element was merged with `player_time`.

# Text

<glossary-variable color="red">

## windowBackgroundWhiteBlackText

Sets the color of almost all texts in the app.

**Be careful:** the bot inline result titles color is also set by this variable,
although the background of the results isn’t set by windowBackgroundWhite but
chat_messagePanelBackground. Consider setting the message panel background the
same as windowBackgroundWhite or check the readability of the bot results.

</glossary-variable>

<figure>

![](/images/text.0.png)

<figcaption>

The red areas show `windowBackgroundWhiteBlackText`.

</figcaption>
</figure>

## Gray text

<glossary-variable color="red">

### windowBackgroundWhiteGrayText

Sets the last seen time color in Contacts.

</glossary-variable>

<glossary-variable color="purple">

### windowBackgroundWhiteGrayText2

Sets the color of descriptions below option titles in Settings. Also sets the
color of the title on `graySection`.

</glossary-variable>

<glossary-variable color="blue">

### windowBackgroundWhiteGrayText3

Sets the color of a session’s IP in Settings → Privacy and Security → Active
Sessions.

</glossary-variable>

<glossary-variable color="lightBlue">

### windowBackgroundWhiteGrayText4

Sets the color of description texts below sections in Settings.

</glossary-variable>

<glossary-variable color="green">

### windowBackgroundWhiteGrayText5

Sets the color of Telegram version at the bottom in Settings.

</glossary-variable>

<glossary-variable color="yellow">

### windowBackgroundWhiteGrayText6

Sets the color of description texts below text fields like in Settings → Phone →
Change Number and the color of the info text in “What is a Channel?” screen that
appears when you try to create a channel (unless you already have one).

**Be careful:** this variable sets the color of text like “Please enter your
password” on the gray background in Settings → Privacy and Security → Two-step
Verification/Passcode Lock when you have either a two-step or a passcode lock
password when you have (one of) them set.

</glossary-variable>

<glossary-variable color="pink">

### windowBackgroundWhiteGrayText7

Sets the color of a disabled item in Settings → Privacy and Security → Passcode
Lock when you have no passcode lock.

</glossary-variable>

<glossary-variable color="brown">

### windowBackgroundWhiteGrayText8

Sets the color of the info text in Settings → Username.

</glossary-variable>

<figure>

![](/images/text.1.png)

<figcaption>

The red area at the top shows `windowBackgroundWhiteGrayText`, the purple area
shows `windowBackgroundWhiteGrayText2`, the dark blue area shows
`windowBackgroundWhiteGrayText3`, the light blue area shows
`windowBackgroundWhiteGrayText4`, the green area shows
`windowBackgroundWhiteGrayText5`, the yellow area shows
`windowBackgroundWhiteGrayText6`, the pink area at the bottom shows
`windowBackgroundWhiteGrayText7`, and the brown area shows
`windowBackgroundWhiteGrayText8`.

</figcaption>
</figure>

## Red text

<glossary-variable color="red">

### windowBackgroundWhiteRedText

Sets the color of red buttons on dialogs like the “Clear Cache” button in
Settings → Data and Storage → Storage Usage → Clear Cache.

You can’t change this variable with the in-app editor for unknown reasons, so
you have to use [.attheme editor](http://snejugal.ru/attheme-editor) to change
this variable.

</glossary-variable>

<glossary-variable color="blue">

### windowBackgroundWhiteRedText2

Sets the color of red buttons in Settings like the “Terminate All Other
Sessions” button in Settings → Privacy and Security → Active Sessions.

</glossary-variable>

<glossary-variable color="green">

### windowBackgroundWhiteRedText3

Sets the color of the “Abort two-step verification setup” button in Settings →
Privacy and Security → Two-step Verification while setting up a two-step
password.

</glossary-variable>

<glossary-variable color="purple">

### windowBackgroundWhiteRedText4

Sets the color of warning text below a text field like in Settings → Username
when you try to take a username less than 5 symbols or already taken.

</glossary-variable>

<glossary-variable color="lightBlue">

### windowBackgroundWhiteRedText5

Sets the color of warning buttons like “Leave Channel” in the channel info
screen.

</glossary-variable>

<glossary-variable color="yellow">

### windowBackgroundWhiteRedText6

Sets the color of “Reset my account” button when you try to sign in your account
that has a two-step verification password but you don’t remember it, try to
restore it with your email but you can’t access it.

This variable can’t be changed with the in-app editor (because it closes after
you sign out), so you have to use
[.attheme editor](http://snejugal.ru/attheme-editor) to change this variable.

</glossary-variable>

<figure>

![](/images/text.2.png)

<figcaption>

The red area shows `windowBackgroundWhiteRedText`, the dark blue area shows
`windowBackgroundWhiteRedText2`, the green area shows
`windowBackgroundWhiteRedText3`, the purple area shows
`windowBackgroundWhiteRedText4`, the light blue area shows
`windowBackgroundWhiteRedText5`, and the yellow area shows
`windowBackgroundWhiteRedText6`.

</figcaption>
</figure>

## Green text

<glossary-variable color="red">

### windowBackgroundWhiteGreenText

Sets the color of success text below text fields like in Settings → Username
when you take a username no one has and longer than 5 symbols.

</glossary-variable>

<glossary-variable color="blue">

### windowBackgroundWhiteGreenText2

Sets the color of green buttons like “Start Secret Chat” in the chat with a
person info screen.

</glossary-variable>

<figure>

![](/images/text.3.png)

<figcaption>

The red area shows `windowBackgroundWhiteGreenText` and the blue area shows
`windowBackgroundWhiteGreenText2`.

</figcaption>
</figure>

## Blue text

<glossary-variable color="red">

### windowBackgroundWhiteBlueHeader

Sets the color of section header in Settings.

</glossary-variable>

<glossary-variable color="purple">

### windowBackgroundWhiteBlueText

Sets the color of the Online status text in Contacts.

</glossary-variable>

<glossary-variable color="blue">

### windowBackgroundWhiteBlueText3

Sets the color of the Online status text in search results.

</glossary-variable>

<glossary-variable color="lightBlue">

### windowBackgroundWhiteBlueText4

Sets the color of the “Change Number” button in Settings → Phone and also sets
the match highlights in search results.

</glossary-variable>

<glossary-variable color="green">

### windowBackgroundWhiteBlueText5

Sets the color of “Create Channel” button in “What is a Channel?” screen that
appears when you try to create a new channel (unless you already have one). If
the screen doesn’t appear to you, then use
[.attheme editor](http://snejugal.ru/attheme-editor) to change this variable.

</glossary-variable>

<glossary-variable color="orange">

### windowBackgroundWhiteBlueText6

Sets the color of the pay button after you entered all payment data when you’re
buying something. You can make a fake pay with [@ShopBot](https://t.me/shopbot)
to see the button or use [.attheme editor](http://snejugal.ru/attheme-editor) to
add change the variable.

</glossary-variable>

<glossary-variable color="teal">

### windowBackgroundWhiteBlueText7

Sets the “Send your current location” button color in location attachment
screen.

</glossary-variable>

<glossary-variable color="lightGreen">

### windowBackgroundWhiteValueText

Sets the option value color in Settings.

</glossary-variable>

<glossary-variable color="deepOrange">

### windowBackgroundWhiteLinkText

Sets the color of links, like #hashtags, @usernames or just links in the chat
info screen.

</glossary-variable>

<figure>

![](/images/text.4.png)

<figcaption>

The red area shows `windowBackgroundWhiteBlueHeader`, the purple area shows
`windowBackgroundWhiteBlueText`, the dark blue area shows
`windowBackgroundWhiteBlueText3`, the light blue areas show
`windowBackgroundWhiteBlueText4`, the green area shows
`windowBackgroundWhiteBlueText5`, the light orange area is
`windowBackgroundWhiteBlueText6`, the teal area shows
`windowBackgroundWhiteBlueText7`, the light green one shows
`windowBackgroundWhiteValueText`, and the dark orange area shows
`windowBackgroundWhiteLinkText`.

</figcaption>
</figure>

<glossary-variable color="red">

### windowBackgroundWhiteLinkSelection

Sets the overlay color that appears when you tap a link.

</glossary-variable>

<figure>

![](/images/text.5.png)

<figcaption>

The red area shows `windowBackgroundWhiteLinkSelection`.

</figcaption>
</figure>

# Controls

## Text fields

Like the field in Settings → Username.

- Entered text color is set by `windowBackgroundWhiteBlackText`.

<glossary-variable color="red">

### windowBackgroundWhiteHintText

Sets the color of an input's placeholder — it's the text that you see before you
enter any text.

</glossary-variable>

<glossary-variable color="indigo">

### windowBackgroundWhiteInputField

Sets the bottom border color when the input is inactive.

</glossary-variable>

<glossary-variable color="green">

### windowBackgroundWhiteInputFieldActivated

Sets the bottom border color when the input is active.

</glossary-variable>

<figure>

![](/images/controls.input.png)

<figcaption>

The red area shows `windowBackgroundWhiteHintText`, the blue area shows
`windowBackgroundWhiteInputField`, and the green area shows
`windowBackgroundWhiteInputFieldActivated`.

</figcaption>
</figure>

## Switch

Like in Settings.

<glossary-variable color="indigo">

### switchTrack

Sets the color of a switch track — its background — when the switch is turned
off.

</glossary-variable>

<glossary-variable color="red">

### switchThumb

Sets the color of a switch thumb — the circle at the end of a switch — when the
switch is turned off.

</glossary-variable>

<glossary-variable color="teal">

### switchTrackChecked

Sets the color of a switch track when it's turned on.

</glossary-variable>

<glossary-variable color="pink">

### switchThumbChecked

Sets the color of a switch thumb when the switch is turned on.

</glossary-variable>

<figure>

![](/images/controls.switch.png)

<figcaption>

The red area shows `switchThumb`, the blue area shows `switchTrack`, the green
area shows `switchTrackChecked`, and the pink area shows `switchThumbChecked`.

</figcaption>
</figure>

## Checkbox

Like in Chat info → Notifications → Customize.

<glossary-variable color="red">

### checkboxSquareUnchecked

Sets the border of a checkbox when it's unchecked.

</glossary-variable>

<glossary-variable color="orange">

### checkboxSquareDisabled

Sets the background of a checkbox when it's disabled. Like in Settings of a
group that's not converted to a supergroup.

</glossary-variable>

<glossary-variable color="indigo">

### checkboxSquareBackground

Sets the background of a checkbox when it's checked.

</glossary-variable>

<glossary-variable color="green">

### checkboxSquareCheck

Sets the color of the check mark when the checkbox is checked.

</glossary-variable>

<figure>

![](/images/controls.checkbox.png)

<figcaption>

The red area shows `checkboxSquareUnchecked`, the blue area shows
`checkboxSquareBackground`, the green area shows `checkboxSquareCheck`, and the
orange area shows `checkboxSquareDisabled`.

</figcaption>
</figure>

## Openable list control

Like your country's name in Settings → Phone → Change Number.

<glossary-variable color="red">

### windowBackgroundGrayLine

Sets the border color of this element.

</glossary-variable>

<figure>

![](/images/controls.selection.png)

<figcaption>

The red area shows `windowBackgroundGrayLine`.

</figcaption>
</figure>

## Progress indicators

<glossary-variable color="red">

### contextProgressInner1

Sets the progress indicator when an edited message is being saved.

</glossary-variable>

<glossary-variable color="red">

### contextProgressOuter1

Sets the progress indicator when an edited message is being saved.

</glossary-variable>

<glossary-variable color="green">

### contextProgressInner2

Sets the progress indicator on the action bar when a group is being created or a
game is being loaded.

</glossary-variable>

<glossary-variable color="green">

### contextProgressOuter2

Sets the progress indicator on the action bar when a group is being created or a
game is being loaded.

</glossary-variable>

<glossary-variable color="indigo">

### contextProgressInner3

Sets the progress indicator on the top bar when opening a link using Instant
View. These variables can be changed only with [`.attheme editor`].

</glossary-variable>

<glossary-variable color="indigo">

### contextProgressOuter3

Sets the progress indicator on the top bar when opening a link using Instant
View. These variables can be changed only with [`.attheme editor`].

</glossary-variable>

<glossary-variable color="amber">

### login_progressInner

Sets the timer counting progress indicator when you're signing in and waiting
for a call from Telegram that it will process automatically (usually Telegram
makes a call when you're signed in another device but you can't access it to get
the sign in code).

</glossary-variable>

<glossary-variable color="amber">

### login_progressOuter

Sets the timer counting progress indicator when you're signing in and waiting
for a call from Telegram that it will process automatically.

</glossary-variable>

<figure>

![](/images/controls.progress.0.png)

<figcaption>

The red area shows `contextProgressInner1` and `contextProgressOuter1`, the
green area shows `contextProgressInner2` and `contextProgressOuter2`, he purple
area shows `contextProgressInner3` and `contextProgressOuter3`, and the orange
area shows `login_progressInner` and `login_progressOuter`.

</figcaption>
</figure>

[`.attheme editor`]: https://attheme-editor.snejugal.ru

<glossary-variable color="red">

### progressCircle

Sets the color of the loading indicator below lists.

</glossary-variable>

<figure>

![](/images/controls.progress.1.png)

<figcaption>

The red area shows `progressCircle`.

</figcaption>
</figure>

### Profile screen

<glossary-variable color="red">

#### profile_actionBackground

Sets the button background.

</glossary-variable>

<glossary-variable color="amber">

#### profile_actionPressedBackground

Sets the button overlay when it's pressed.

</glossary-variable>

<glossary-variable color="green">

#### profile_actionIcon

Sets the color of the icon near the profile. In groups where you are an admin
this icon is “Set picture icon”, while looking at profiles it's “New Message”
button or “Move to current location” on the location attach screen.

</glossary-variable>

<figure>

![](/images/controls.actionButton.png)

<figcaption>

The red area shows `profile_actionBackground`, the orange area shows
`profile_actionPressedBackground`, and the green area shows
`profile_actionIcon`.

</figcaption>
</figure>

# Avatars

If a user doesn't have a profile picture or it's not loaded yet, a colored
circle with a random color and one or two letters will be shown.

<glossary-variable color="gray">

## avatar_text

Sets the color of the letters on unloaded avatars.

</glossary-variable>

# Lists

<glossary-variable color="red">

## divider

Sets the color of gray lines that divide items of lists.

</glossary-variable>

<glossary-variable color="blue">

## listSelectorSDK21

Sets the color of the ripple effect when you tap a list item.

</glossary-variable>

<glossary-variable color="green">

## emptyListPlaceholder

Sets the color of placeholder text — the text that you see if there's no content
— when you open an empty list. You can see it in Chat screen → Attach — Music if
you don't have any music. If you do, you can move them from the Music folder for
a moment and move them back after you're done.

</glossary-variable>

<figure>

![](/images/list.0.png)

<figcaption>

The red area shows `divider`, the blue area shows `listSelectorSDK21`, and the
green area shows `emptyListPlaceholder`.

</figcaption>
</figure>

# Chats list

## General variables

<glossary-variable color="blue">

### chats_message

Sets the color of messages below the chat titles.

</glossary-variable>

<glossary-variable color="orange">

### chats_date

Sets the time or date color in the top right corner of a chat.

</glossary-variable>

<glossary-variable color="red">

### chats_nameMessage

Sets the sender name color in groups.

</glossary-variable>

<glossary-variable color="lightGreen">

### chats_actionMessage

Sets the color of texts like “You joined the channel” and also attached message
type (like photo, GIF, video etc) if the sender name is omitted.

</glossary-variable>

<glossary-variable color="green">

### chats_attachMessage

Sets the attached message type like photo, video, audio etc if the sender name
is not omitted.

</glossary-variable>

<glossary-variable color="purple">

### chats_draft

Sets the “Draft” text color that appears when you type some text and then close
the chat without sending it.

</glossary-variable>

<figure>

![](/images/chatslist.0.png)

<figcaption>

The blue underline shows `chats_message`, the orange underline shows
`chats_date`, the red underline shows `chats_nameMessage`, the light green
underline shows `chats_actionMessage`, the dark green line shows
`chats_attachMessage`, and the purple line shows `chats_draft`.

</figcaption>
</figure>

## Typical chats

<glossary-variable color="green">

### chats_name

Sets the title color of a chat.

</glossary-variable>

<glossary-variable color="red">

### chats_nameIcon

Sets the icon color of a chat if the chat is a channel or a group.

</glossary-variable>

<figure>

![](/images/chatslist.1.png)

<figcaption>

The red underline shows `chats_nameIcon` and the green line shows `chats_name`.

</figcaption>
</figure>

## Secret chats

<glossary-variable color="blue">

### chats_secretName

Sets the color of a secret chat title.

</glossary-variable>

<glossary-variable color="red">

### chats_secretIcon

Sets the color of a secret chat icon.

</glossary-variable>

<figure>

![](/images/chatslist.2.png)

<figcaption>

The red underline shows `chats_secretIcon` and the blue underline shows
`chats_secretName`.

</figcaption>
</figure>

## Unread counter

<glossary-variable color="red">

### chats_unreadCounter

Sets the background color of unread counter background if the chat is not muted.
Also it sets the background if the mention icon (“@”) if you've been mentioned
in the chat.

</glossary-variable>

<glossary-variable color="green">

### chats_unreadCounterMuted

Sets the background color of unread counter background if the chat is muted.

</glossary-variable>

<glossary-variable color="purple">

### chats_unreadCounterText

Sets the text color of unread counter, independently whether the chat is muted.

</glossary-variable>

**Note:** the “@” mention icon cannot be changed for unknown reasons.

<figure>

![](/images/chatslist.3.png)

<figcaption>

The red area shows `chats_unreadCounter`, the green area shows
`chats_unreadCounterMuted`, and the purple area shows `chats_unreadCounterText`.

</figcaption>
</figure>

## Verified icon

<glossary-variable color="green">

### chats_verifiedBackground

Sets the background color of a verified icon.

</glossary-variable>

<glossary-variable color="red">

### chats_verifiedCheck

Sets the check color inside a verified icon.

</glossary-variable>

<figure>

![](/images/chatslist.4.png)

<figcaption>

An example of a verified icon.

</figcaption>
</figure>

## “Send message” button

<glossary-variable color="red">

### chats_actionBackground

Sets the background of the “New Message” button.

</glossary-variable>

<glossary-variable color="green">

### chats_actionPressedBackground

Sets the overlay of the the “New Message” button when it's pressed. The
overlaying means that if you set the alpha channel of this variable to less that
255, the button won't become transparent, but it will mix two colors. It
overlays only the background, but not the icon.

</glossary-variable>

<glossary-variable color="yellow">

### chats_actionIcon

Sets the icon on the “New Message” button.

</glossary-variable>

<figure>

![](/images/chatslist.5.png)

<figcaption>

The red area is `chats_actionBackground`, the green area is
`chats_actionPressedBackground`, and the yellow area is `chats_actionIcon`.

</figcaption>
</figure>

## Left menu

The selector on this menu is listSelectorSDK21, because the menu is a list.

<glossary-variable color="red">

### chats_menuBackground

Sets the background color of the left panel.

</glossary-variable>

<glossary-variable color="green">

### chats_menuItemText

Sets the text color on the left panel.

</glossary-variable>

<figure>

![](/images/chatslist.6.png)

<figcaption>

The red area shows `chats_menuBackground` and the green underlines show
`chats_menuItemText`.

</figcaption>
</figure>

# Calls

## Calls log

<glossary-variable color="red">

### calls_callReceivedGreenIcon

Sets the color of successful call in calls log or chat screen.

</glossary-variable>

<glossary-variable color="green">

### calls_callReceivedRedIcon

Sets the color of failure call in calls log or chat screen.

</glossary-variable>

<figure>

![](/images/calls.0.png)

<figcaption>

The red area shows `calls_callReceivedGreenIcon`, the green area shows
`calls_callReceivedRedIcon`.

</figcaption>
</figure>

## “Rate the quality” prompt

After you had a call and the call was ended, a “Rate the quality” prompt will
appear. You may also force the prompt to appear if you go to Calls log, hold a
history item and tap “Rate call”. Unfortunately, you can edit elements of the
prompt only with [.attheme editor](http://snejugal.ru/attheme-editor).

<glossary-variable color="blue">

### calls_ratingStar

Sets the border color of unchosen stars on the prompt.

</glossary-variable>

<glossary-variable color="red">

### calls_ratingStarSelected

Sets the fill color of chosen stars on the prompt.

</glossary-variable>

<figure>

![](/images/calls.1.png)

<figcaption>

The red area shows `calls_ratingStarSelected`, the blue area shows
`calls_ratingStar`.

</figcaption>
</figure>

# Action bar

## Default mode

<glossary-variable color="red">

### actionBarDefault

Sets the app header background color. The background of the status bar is
generated automatically (on Android 5.0 and above). The in-app player header,
header in Settings and chat info and the header that appears when you select any
messages have another variables.

</glossary-variable>

<glossary-variable color="lightBlue">

### actionBarDefaultIcon

Sets the color of icons on the action bar.

</glossary-variable>

<glossary-variable color="yellow">

### actionBarDefaultTitle

Sets the title color on the action bar.

</glossary-variable>

<glossary-variable color="green">

### actionBarDefaultSelector

Sets the color of the circle that appears when you tap an icon on the action
bar.

</glossary-variable>

<glossary-variable color="orange">

### actionBarDefaultSubtitle

Sets the color of the text that is below the title, like members amount, last
seen time or “typing…” status.

</glossary-variable>

<figure>

![](/images/actionbar.0.png)

<figcaption>

The red area shows `actionBarDefault`, the light blue area shows
`actionBarDefaultIcon`, the yellow area shows `actionBarDefaultTitle`, the green
area shows `actionBarDefaultSelector`, and the orange area shows
`actionBarDefaultSubtitle`.

</figcaption>
</figure>

## Action mode

Action mode is the top bar dialog that opens when either chat bubbles get
selected for reply, forwarding or edit or selecting shared files, music or link
posts in chat shared media or attaching files in the message panel.

<glossary-variable color="red">

### actionBarActionModeDefault

Sets the overlay color of the action mode panel. If you set the alpha channel of
this variable to less than 255, the default action bar will be seen.

</glossary-variable>

<glossary-variable color="blue">

### actionBarActionModeDefaultIcon

Sets the colors of the icon on the panel and the number of selected items as
well.

</glossary-variable>

<glossary-variable color="orange">

### actionBarActionModeDefaultSelector

Sets the color of the circle that appears when you tap an icon on the panel.

</glossary-variable>

<glossary-variable color="green">

### actionBarActionModeDefaultTop

Sets the status bar background color, but it still gets darker for 20% though.
Setting the alpha channel of this variable to zero will set the status bar color
to `actionBarActionModeDefault` value.

</glossary-variable>

<figure>

![](/images/actionbar.1.png)

<figcaption>

The red area shows `actionBarActionModeDefault`, the green area shows
`actionBarActionModeDefaultTop`, the blue area shows
`actionBarActionModeDefaultIcon`, and the orange area shows
`actionBarActionModeDefaultSelector`.

</figcaption>
</figure>

## Submenu

Submenu is the menu that appears when you tap the three dots icon on the action
bar.

**Note:** the submenu in Photo Viewer depended on the variables below before,
but doesn't anymore.

<glossary-variable color="red">

### actionBarDefaultSubmenuBackground

Sets the background of a submenu.

</glossary-variable>

<glossary-variable color="blue">

### actionBarDefaultSubmenuItem

Sets the text color of submenu buttons.

</glossary-variable>

<figure>

![](/images/actionbar.2.png)

<figcaption>

The red area shows `actionBarDefaultSubmenuBackground` and the blue area shows
`actionBarDefaultSubmenuItem`.

</figcaption>
</figure>

## Search

<glossary-variable color="red">

### actionBarDefaultSearchPlaceholder

Sets the color of the text you can see if you haven't entered any text in the
search field.

</glossary-variable>

<glossary-variable color="green">

### actionBarDefaultSearch

Sets the color of the entered text in the search field.

</glossary-variable>

<figure>

![](/images/actionbar.3.png)

<figcaption>

The red area shows `actionBarDefaultSearchPlaceholder`, the green area shows
`actionBarDefaultSearch`.

</figcaption>
</figure>

## “What is a channel?” screen

The “What is a channel?” screen appears when you try to create a new channel if
you didn't create any. If you did, you can change the variable only with
[.attheme editor](http://snejugal.ru/attheme-editor).

<glossary-variable color="red">

### actionBarWhiteSelector

Sets the circle color when you tap the back button.

</glossary-variable>

<figure>

![](/images/actionbar.4.png)

<figcaption>

The red area shows `actionBarWhiteSelector`.

</figcaption>
</figure>

# Dialogs

Dialogs are the panels at the bottom or in the middle of the screen. For
example, the one that appears when you tap a message or that one that appears
when you hold a chat on the chat list.

## Backgrounds

<glossary-variable color="red">

### dialogBackground

Sets the background of dialogs.

</glossary-variable>

<glossary-variable color="green">

### dialogBackgroundGray

Sets the small space between sections in Supergroup settings → Event Log →
Settings.

</glossary-variable>

<figure>

![](/images/dialogs.bg.png)

<figcaption>

The red area shows `dialogBackground` and the green area shows
`dialogBackgroundGray`.

</figcaption>
</figure>

## Text

<glossary-variable color="red">

### dialogTextBlack

Sets the color of almost all text on dialogs.

</glossary-variable>

<figure>

![](/images/dialogs.text.0.png)

<figcaption>

The red underlines show `dialogTextBlack`.

</figcaption>
</figure>

<glossary-variable color="red">

### dialogTextGray2

Sets the color of descriptions on the attach panel.

</glossary-variable>

<figure>

![](/images/dialogs.text.1.png)

<figcaption>

The red underlines show `dialogTextGray2`.

</figcaption>
</figure>

### Blue text

<glossary-variable color="red">

#### dialogLinkSelection

Sets the link in sticker pack name underlay when you tap it.

</glossary-variable>

<figure>

![](/images/dialogs.text.2.png)

<figcaption>

The red underlines show `dialogTextBlack`.

</figcaption>
</figure>

## Decorative elements

<glossary-variable color="red">

### dialogIcon

Sets the color of icons. For example, the ones that appear when you hold a chat
on the chat list.

</glossary-variable>

<glossary-variable color="green">

### dialogGrayLine

Sets the color of the border you can see in the in-app video player panel. You
can open it by attaching a YouTube video link to your message, then tap the
video preview image.

</glossary-variable>

<figure>

![](/images/dialogs.text.delem.png)

<figcaption>

The red area shows `dialogIcon` and the green area shows `dialogGrayLine`.

</figcaption>
</figure>

## Badge

<glossary-variable color="red">

### dialogBadgeBackground

Sets the background color of a badge — the counter you see when you forward
messages or add stickers.

</glossary-variable>

<glossary-variable color="green">

### dialogBadgeText

Sets the text color on the badge when forwarding message but not when adding
stickers — it's set by picker_badgeText.

</glossary-variable>

<figure>

![](/images/dialogs.badge.png)

<figcaption>

The red area shows `dialogBadgeBackground` and the green area shows
`dialogBadgeText`.

</figcaption>
</figure>

## Controls

### Buttons

<glossary-variable color="red">

#### dialogButton

Sets the text color of buttons on dialogs on those that appear in the middle of
the screen — for example, when you're deleting a message.

</glossary-variable>

<glossary-variable color="green">

#### dialogButtonSelector

Sets the button background color when you tap it.

</glossary-variable>

<figure>

![](/images/dialogs.btn.png)

<figcaption>

The red underlines show `dialogButton` and the green area shows
`dialogButtonSelector`.

</figcaption>
</figure>

### Radio buttons

They should set radio buttons colors on dialogs, but they don't for some unknown
reasons.

<glossary-variable color="gray">

#### dialogRadioButton

</glossary-variable>

<glossary-variable color="gray">

#### dialogRadioButtonChecked

</glossary-variable>

### Square checkboxes

Set the same elements of the square checkboxes but on dialogs.

<glossary-variable color="indigo">

#### dialogCheckboxSquareBackground

</glossary-variable>

<glossary-variable color="green">

#### dialogCheckboxSquareCheck

</glossary-variable>

<glossary-variable color="orange">

#### dialogCheckboxSquareDisabled

</glossary-variable>

<glossary-variable color="red">

#### dialogCheckboxSquareUnchecked

</glossary-variable>

<figure>

![](/images/dialogs.sCheckbox.png)

<figcaption>

The red area shows `dialogCheckboxSquareUnchecked`, the blue area shows
`dialogCheckboxSquareBackground`, the green area shows
`dialogCheckboxSquareCheck`, and the orange area shows
`dialogCheckboxSquareDisabled` (note that it is how a disabled checkbox may look
like, but we're not sure about that because we don't know where it is used).

</figcaption>
</figure>

### Round checkboxes

<glossary-variable color="red">

#### dialogRoundCheckBox

Sets the circle background that appears when you select chats you want to
forward messages to on the forward panel.

</glossary-variable>

<glossary-variable color="green">

#### dialogRoundCheckBoxCheck

Sets the color of the check mark on that circle.

</glossary-variable>

<figure>

![](/images/dialogs.rCheckbox.png)

<figcaption>

The red area shows `dialogRoundCheckBox` and the green area shows
`dialogRoundCheckBoxCheck`.

</figcaption>
</figure>

## Text fields

<glossary-variable color="red">

### dialogInputField

Sets the text field bottom border when the field is inactive. Inactive state is
seen when you rate a call for 4 or less stars; you can get the ”Rate Call”
prompt when you hold a call in Calls Log.

</glossary-variable>

<glossary-variable color="green">

### dialogInputFieldActivated

Sets the color of the bottom border below text fields when the field is active —
almost all text fields on dialogs right after they appear.

</glossary-variable>

<figure>

![](/images/dialogs.field.png)

<figcaption>

The red area shows `dialogInputField` and the green area shows
`dialogInputFieldActivated`.

</figcaption>
</figure>

## Progress indicators

<glossary-variable color="red">

### dialogLineProgressBackground

Sets the background color of line progress you can see when you save to
downloads any file (three dots beside a file on chat screen → Save to
downloads).

</glossary-variable>

<glossary-variable color="green">

### dialogLineProgress

Sets the color of the line that shows what percent has already been downloaded.

</glossary-variable>

<figure>

![](/images/dialogs.progress.png)

<figcaption>

The red area shows `dialogLineProgressBackground` and the green area shows
`dialogLineProgress`.

</figcaption>
</figure>

## Attach panel

<glossary-variable color="red">

### dialogScrollGlow

Sets the glow color you can see when you quickly scroll the attach panel.

</glossary-variable>

<figure>

![](/images/dialogs.attachpanel.0.png)

<figcaption>

The black glow is `dialogScrollGlow`. In the default theme, it is white, and on
this example image, it was made black, so one can clearly see it.

</figcaption>
</figure>

Next variables set the background color of attach buttons.

<glossary-variable color="gray">

### chat_attachGalleryBackground

</glossary-variable>

<glossary-variable color="gray">

### chat_attachVideoBackground

</glossary-variable>

<glossary-variable color="gray">

### chat_attachMusicBackground

</glossary-variable>

<glossary-variable color="gray">

### chat_attachFileBackground

</glossary-variable>

<glossary-variable color="gray">

### chat_attachContactBackground

</glossary-variable>

<glossary-variable color="gray">

### chat_attachLocationBackground

</glossary-variable>

<glossary-variable color="gray">

### chat_attachHideBackground

</glossary-variable>

<glossary-variable color="gray">

### chat_attachSendBackground

</glossary-variable>

Next variables set the icon color of attach buttons.

<glossary-variable color="gray">

### chat_attachGalleryIcon

</glossary-variable>

<glossary-variable color="gray">

### chat_attachVideoIcon

</glossary-variable>

<glossary-variable color="gray">

### chat_attachMusicIcon

</glossary-variable>

<glossary-variable color="gray">

### chat_attachFileIcon

</glossary-variable>

<glossary-variable color="gray">

### chat_attachContactIcon

</glossary-variable>

<glossary-variable color="gray">

### chat_attachLocationIcon

</glossary-variable>

<glossary-variable color="gray">

### chat_attachHideIcon

</glossary-variable>

<glossary-variable color="gray">

### chat_attachSendIcon

</glossary-variable>

<figure>

![](/images/dialogs.attachpanel.1.png)

<figcaption>

The buttons' backgrounds are changed by `chat_attach*Background` and their icons
are changed by `chat_attach*Icon`.

</figcaption>
</figure>

<figure>

![](/images/dialogs.attachpanel.2.png)

<figcaption>

This button is `chat_attachSendBackground` (it shows when you select at least
one photo to send).

</figcaption>
</figure>

Next variables set the colors of the “leaves” of the camera icon, in the
clockwise direction.

<glossary-variable color="gray">

### chat_attachCameraIcon1

</glossary-variable>

<glossary-variable color="gray">

### chat_attachCameraIcon2

</glossary-variable>

<glossary-variable color="gray">

### chat_attachCameraIcon3

</glossary-variable>

<glossary-variable color="gray">

### chat_attachCameraIcon4

</glossary-variable>

<glossary-variable color="gray">

### chat_attachCameraIcon5

</glossary-variable>

<glossary-variable color="gray">

### chat_attachCameraIcon6

</glossary-variable>

<figure>

![](/images/dialogs.attachpanel.3.png)

<figcaption>

The numbers show where each “leaf” of the icon is.

</figcaption>
</figure>

- The color of descriptions below buttons is `dialogTextGray2`.

