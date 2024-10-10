# 安卓主题参数变量介绍(中文)

此文档来源于 [项目](https://gitlab.com/attheme-glossary/database)

在为 Android Telegram 创建主题时，你可以找到你不知道变量的元素，或者你不知道它们会发生什么变化的变量。更糟糕的是，应用程序编辑器中没有变量的描述，所以你必须询问比你更了解主题化的人。

我们开始创建这个词汇表是为了在一个地方收集变量描述。术语表已经对许多变量进行了描述，但还有更多的变量有待描述。你可以帮助它变得更好！

术语表的每个部分都是 [自由软件]。网站的源代码可以在 GitLab[这里][网站] 上找到，最重要的部分——数据库——可以在 GitLab[这里][数据库] 上找到。你可以通过对上面的存储库打开合并请求来对这些部分做出贡献，一旦你的合并请求被合并，你就可以立即看到你的贡献！

[free software]: https://en.wikipedia.org/wiki/Free_software
[website]: https://gitlab.com/attheme-glossary/website
[database]: https://gitlab.com/attheme-glossary/database

# Backgrounds : attheme 背景样式

<glossary-variable color="red">

## windowBackgroundWhite

设置除聊天屏幕背景之外的几乎所有背景。例如，它在聊天列表屏幕上设置背景或在设置中设置部分的背景。

</glossary-variable>

<glossary-variable color="green">

## windowBackgroundGray

设置辅助背景，例如 G.在“设置”中，如果未完全填满屏幕，则在“部分之间”或“下面”调用日志。

</glossary-variable>

<figure>

![](/images/backgrounds.0.png)

<figcaption>

显示 `windowBackgroundWhite` 红色区域和绿色区域 `windowBackgroundGray`。

</figcaption>
</figure>

<glossary-variable color="gray">

## chat_wallpaper

设置聊天屏幕的背景，接受图像或颜色。你必须更改_这个变量_，以便 Telegram 在你的主题中包含你的壁纸。在“设置”→“聊天壁纸”中更改壁纸不会将其包含在你的主题中。

**请注意：**如果你将图像设置为壁纸，Telegram 将在你每次使用应用内编辑器更改任何变量时对其进行压缩。因此，你必须在共享主题之前重新设置图像。

</glossary-variable>

<figure>

![](/images/backgrounds.1.png)

<figcaption>

作为聊天屏幕壁纸的图像和颜色示例。

</figcaption>
</figure>

# Chat Screen : attheme 聊天页面样式

## Bubbles

<glossary-variable color="red">

### chat_selectedBackground

设置按住邮件时的背景参考底图颜色。

</glossary-variable>

<figure>

![](/images/chatscreen.0.png)

<figcaption>

红色区域显示 `chat_selectedBackground`。

</figcaption>
</figure>

## Message panel

<glossary-variable color="red">

### chat_messagePanelBackground

设置消息面板背景的颜色。

</glossary-variable>

<glossary-variable color="green">

### chat_messagePanelHint

设置消息面板中显示“消息”或“广播”的占位符的颜色。

</glossary-variable>

<glossary-variable color="indigo">

### chat_messagePanelText

设置消息面板中文本的颜色。

</glossary-variable>

<glossary-variable color="orange">

### chat_messagePanelSend

设置消息面板中“发送”图标的颜色。

</glossary-variable>

<glossary-variable color="blue">

### chat_messagePanelIcons

设置消息面板中图标的颜色。

</glossary-variable>

<glossary-variable color="brown">

### chat_fieldOverlayText

设置消息栏上的文本颜色，以加入频道或群组，或取消语音/视频消息，或将聊天静音/取消静音。

</glossary-variable>

<figure>

![](/images/chatscreen.1.png)

<figcaption>

显示 `chat_messagePanelBackground` 红色区域、绿色区域 `chat_messagePanelHint`、深蓝色区域 `chat_messagePanelText`、橙色区域 `chat_messagePanelSend`、浅蓝色区域 `chat_messagePanelIcons` 和棕色下划线 `chat_fieldOverlayText`（通道示例）。

</figcaption>
</figure>

## Emojis/stickers panel

如果你使用应用内编辑器更改此部分中的变量，则需要重新打开聊天屏幕才能看到更改。

<glossary-variable color="red">

### chat_emojiPanelBackground

为表情符号、保存的贴纸、预览中的贴纸包和消息面板下方的机器人键盘设置面板的背景颜色，并在黑色上分层 Alpha 值。

</glossary-variable>

<glossary-variable color="green">

### chat_emojiPanelEmptyText

如果未使用表情符号或列表已清除且带时钟图标的最近列表为空，则设置“无最近”文本的颜色。要清除最近的列表，请选择并按住任何最近没有肤色变化的表情符号，然后在对话框中确认清除。

</glossary-variable>

<glossary-variable color="indigo">

### chat_emojiPanelIcon

设置表情符号和贴纸面板中消息面板下方可水平滚动行中所有图标的颜色，但实际选定的表情符号集除外。

</glossary-variable>

<glossary-variable color="purple">

### chat_emojiPanelIconSelected

设置表情集所选图标的颜色。

</glossary-variable>

<glossary-variable color="orange">

### chat_emojiPanelIconSelector

设置表示聊天中设置的实际表情符号的线条颜色，_emojiPanelShadowLine.

</glossary-variable>

<glossary-variable color="blue">

### chat_emojiPanelBackspace

设置退格图标的颜色，以便在编辑时删除邮件中最后添加的表情符号。

</glossary-variable>

<glossary-variable color="brown">

### chat_emojiPanelStickerPackSelector

在实际选定的贴纸包上设置方形背景颜色。

</glossary-variable>

<figure>

![](/images/chatscreen.2.png)

<figcaption>

红色区域显示 `chat_emojiPanelBackground`、绿色下划线显示 `chat_emojiPanelEmptyText`、深蓝色区域显示 `chat_emojiPanelIcon`、紫色下划线显示 `chat_emojiPanelIconSelected`、橙色区域显示 `chat_emojiPanelIconSelector`、浅蓝色区域显示 `chat_emojiPanelBackspace` 和棕色区域显示 `chat_emojiPanelStickerPackSelector`。

</figcaption>
</figure>

不幸的是，接下来的五个变量只能用来[.atTheme 编辑器](http://snejugal.ru/attheme-editor)改变。

<glossary-variable color="red">

### chat_emojiPanelStickerSetName

设置滚动时贴纸包标题的颜色。

</glossary-variable>

<glossary-variable color="green">

### chat_emojiPanelStickerSetNameIcon

设置群组贴纸标题旁边的移除或设置图标的颜色。

</glossary-variable>

<figure>

![](/images/chatscreen.3.png)

<figcaption>

红色下划线显示 `chat_emojiPanelStickerSetName`，绿色区域显示 `chat_emojiPanelStickerSetNameIcon`。

</figcaption>
</figure>

<glossary-variable color="red">

### featuredStickers_delButton

在趋势贴纸部分设置“删除”按钮的背景。

</glossary-variable>

<glossary-variable color="indigo">

### featuredStickers_delButtonPressed

在趋势贴纸部分按下时，设置“删除”按钮的背景。

</glossary-variable>

<glossary-variable color="green">

### featuredStickers_unread

设置贴纸包标题附近的蓝点颜色。

</glossary-variable>

<figure>

![](/images/chatscreen.4.png)

<figcaption>

红色区域显示 `featuredStickers_delButton`，深蓝色区域显示 `featuredStickers_delButtonPressed`，绿色区域显示 `featuredStickers_unread`。

</figcaption>
</figure>

## Bot keyboard

背景是 `chat_emojiPanelBackground`。

<glossary-variable color="red">

### chat_botKeyboardButtonText

如果在 Bot 中编程，则设置消息栏下方面板中按钮的文本颜色。

</glossary-variable>

<glossary-variable color="indigo">

### chat_botKeyboardButtonBackground

设置按钮的背景色。

</glossary-variable>

<glossary-variable color="green">

### chat_botKeyboardButtonBackgroundPressed

设置点击时按钮的背景颜色，是这些按钮的选择器。它替换了默认颜色，因此小于 255 的 Alpha 通道将使按钮透明。

</glossary-variable>

<figure>

![](/images/chatscreen.5.png)

<figcaption>

红色下划线显示 `chat_botKeyboardButtonText`，深蓝色区域显示 `chat_botKeyboardButtonBackground`，绿色区域显示 `chat_botKeyboardButtonBackgroundPressed`。

</figcaption>
</figure>

# Contacts : attheme 联系人样式

接下来的两个变量不仅在联系人中使用，而且主要在此处显示。

<glossary-variable color="green">

## windowBackgroundWhiteIcon

设置图标的颜色。

</glossary-variable>

<glossary-variable color="red">

## graySection

设置标题背景颜色，如“联系人”。此页眉上的标题由 `windowBackgroundWhiteGrayText2` 设置。

</glossary-variable>

<figure>

![](/images/contacts.0.png)

<figcaption>

红色— `graySection`，绿色— `windowBackgroundWhiteIcon`。

</figcaption>
</figure>

## Fast scroll

<glossary-variable color="green">

### fastScrollInactive

设置未按下时滚动条的颜色。

</glossary-variable>

<glossary-variable color="red">

### fastScrollActive

设置按住并移动滚动条时滚动条的颜色，以及包含你所在位置的字母的气泡的颜色。

</glossary-variable>

<glossary-variable color="orange">

### fastScrollText

设置按住并移动滚动条时气泡内字母的颜色。

</glossary-variable>

<figure>

![](/images/contacts.1.png)

<figcaption>

绿色— `fastScrollInactive`，红色— `fastScrollActive`，橙色— `fastScrollText`。

</figcaption>
</figure>

## “Invite friends” screen

<glossary-variable color="red">

### contacts_inviteBackground

设置“邀请朋友”屏幕底部提示的背景。

</glossary-variable>

<glossary-variable color="yellow">

### contacts_inviteText

设置提示的文本颜色。

</glossary-variable>

<figure>

![](/images/contacts.2.png)

<figcaption>

红色— `contacts_inviteBackground`，黄色— `contacts_inviteText`。

</figcaption>
</figure>

# Attach Screens : attheme 附件样式

词汇表的这一部分是关于附加屏幕的。

## Files

<glossary-variable color="green">

### files_folderIcon

设置文件夹图标。

</glossary-variable>

<glossary-variable color="red">

### files_folderIconBackground

设置文件夹图标下方的圆形背景。

</glossary-variable>

<glossary-variable color="blue">

### files_iconText

设置文件图标扩展名文本。

</glossary-variable>

<figure>

![](/images/attachscreens.0.png)

<figcaption>

绿色 `files_folderIcon`，红色 `files_folderIconBackground`，蓝色 `files_iconText`。

</figcaption>
</figure>

## Location

<glossary-variable color="red">

### location_markerX

设置在地图上移动红色位置图标时，其下方的 × 的颜色。

</glossary-variable>

<glossary-variable color="green">

### location_sendLocationBackground

设置“发送所选内容/你的当前位置”旁边按钮的背景。

如果使用应用内编辑器更改变量，**重要注意事项：**则必须重新进入屏幕才能看到按钮的实际颜色。

</glossary-variable>

<glossary-variable color="blue">

### location_sendLocationIcon

设置按钮上的图标。

</glossary-variable>

<figure>

![](/images/attachscreens.1.png)

<figcaption>

红色 `location_markerX`，绿色 `location_sendLocationBackground`，蓝色 `location_sendLocationIcon`。

</figcaption>
</figure>

## Music

<glossary-variable color="blue">

### musicPicker_buttonBackground

音乐库中图标的背景。

</glossary-variable>

<glossary-variable color="yellow">

### musicPicker_buttonIcon

里面 `musicPicker_buttonBackground` 的图标音乐。

</glossary-variable>

<glossary-variable color="green">

### musicPicker_checkbox

检查所选音乐的背景。

</glossary-variable>

<glossary-variable color="red">

### musicPicker_checkboxCheck

MusicPicker_ 复选框中的复选图标。

</glossary-variable>

<figure>

![](/images/attachscreens.2.png)

<figcaption>

蓝色— `musicPicker_buttonBackground`，黄色— `musicPicker_buttonIcon`，绿色— `musicPicker_checkbox`，红色— `musicPicker_checkbox`。

</figcaption>
</figure>

<glossary-variable color="blue">

### picker_badge

发送计数器的背景。

</glossary-variable>

<glossary-variable color="yellow">

### picker_badgeText

圆圈内的数字。

</glossary-variable>

<glossary-variable color="green">

### picker_disabledButton

当你还没有选择任何东西时，“发送”按钮的颜色。

</glossary-variable>

<glossary-variable color="red">

### picker_enabledButton

拾取项目时“发送”按钮的颜色。

</glossary-variable>

<figure>

![](/images/attachscreens.3.png)

<figcaption>

绿色 `picker_badge`，黄色 `picker_badgeText`，红色 `picker_disabledButton`，蓝色 `picker_enabledButton`。

</figcaption>
</figure>

# In-app Music Player : attheme 音乐播放器样式

当你打开编辑器时，应用内编辑器打开按钮会被覆盖。聊天列表屏幕上提供了所有玩家变量，你也可以使用[.atTheme 编辑器](http://snejugal.ru/attheme-editor)更改这些变量。

## Action bar

如果你点击左上角的图标，你会看到一个带有动作栏的老式播放器。当播放列表很大并且你滚动列表时，它也会出现。

<glossary-variable color="red">

### player_actionBar

分别设置 ActionBarDefault、ActionBarDefaultIcon、ActionbarDefaultTitle、Actionbar DefaultSubtitle 和 ActionbarDefaultSelector 所做的相同操作。

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

在 Android 5.0 及更高版本上设置状态栏背景颜色，并且与其他任何情况不同，它不会变暗 20%（如果你想这样做，请将值设置为 0，0，0，51）。将此变量的 Alpha 通道设置为零，回退到播放器 _ActionBar.

</glossary-variable>

<figure>

![](/images/musicplayer.0.png)

<figcaption>

红色区域显示 `player_actionBar`，紫色区域显示 `player_actionBarItems”`，黄色区域显示 `player_actionBarTop`，蓝色圆圈显示 `player_actionBarSelector`，绿色下划线显示 `player_actionBarTitle`，橙色下划线显示 `player_actionBarSubtitle`。

</figcaption>
</figure>

## Playlist panel

有关蓝色到粉色区域的信息，请参阅“操作栏”子部分。

有关从灰色到绿色的区域，请参见占位符子部分。

<glossary-variable color="red">

### player_background

设置面板和 SeekBar 面板的背景。

</glossary-variable>

## Seekbar

<glossary-variable color="blue">

### player_progress

设置播放部分指示器。

</glossary-variable>

<glossary-variable color="brown">

### player_progressBackground

设置未播放部分指示器。

</glossary-variable>

<glossary-variable color="lime">

### player_time

设置曲目持续时间和播放的部分时间的颜色。

</glossary-variable>

<glossary-variable color="orange">

### player_button

设置未按下或非活动按钮的颜色。

</glossary-variable>

<glossary-variable color="pink">

### player_buttonActive

设置按下或活动按钮的颜色。

</glossary-variable>

## The list

本小节不描述新变量，这些变量不仅在这里使用，它们的主要用法可以在术语表的其他部分中找到。

<glossary-variable color="purple">

### windowBackgroundWhiteBlackText

设置曲目标题颜色。

</glossary-variable>

<glossary-variable color="indigo">

### windowBackgroundWhiteGrayText2

设置表演者姓名的颜色。

</glossary-variable>

<glossary-variable color="green">

### chat_inLoader

设置列表中播放/暂停按钮的背景色。

</glossary-variable>

<glossary-variable color="green">

### chat_inBubble

设置列表中播放/暂停按钮的图标颜色。

</glossary-variable>

<glossary-variable color="gray">

### actionBarDefaultSubmenuBackground

设置子菜单的背景，例如 G.点击反向按钮时。此处的图标由 `player_button` 和 `player_buttonActive` 设置。

</glossary-variable>

<figure>

![](/images/musicplayer.1.png)

<figcaption>

显示 `player_background` `player_progress` 红色区域，显示蓝色下划线，显示灰色下划线，显示 `player_progressBackground` 棕色下划线、石灰下划线 `player_time`、显示 `player_buttonActive` `player_buttonActive` 橙色区域、显示粉色区域、显示 `windowBackgroundWhiteBlackText` 紫色下划线、显示 `windowBackgroundWhiteGrayText2` 蓝色下划线和显示 `chat_inLoader` 绿色圆圈。有关渐变描边区域，请参见本小节的顶部。

</figcaption>
</figure>

## Placeholder

当音轨没有封面时，你会看到占位符。

<glossary-variable color="red">

### player_placeholderBackground

设置占位符的背景色。

</glossary-variable>

<glossary-variable color="blue">

### player_placeholder

设置占位符图标的颜色。

</glossary-variable>

<figure>

![](/images/musicplayer.2.png)

<figcaption>

红色区域显示 `player_placeholderBackground`，蓝色区域显示 `player_placeholder`。

</figcaption>
</figure>

## Top panel

当你开始播放曲目或语音邮件时，操作栏的顶部和下方会出现一个带有音频控件的面板。本小节是关于此面板的。

<glossary-variable color="red">

### inappPlayerBackground

设置应用内播放器面板的背景色。

</glossary-variable>

<glossary-variable color="green">

### inappPlayerPlayPause

设置应用内播放器面板的播放/暂停按钮的颜色。

</glossary-variable>

<glossary-variable color="blue">

### inappPlayerPerformer

设置在应用内播放器面板上播放音频/歌曲的人的文本颜色。

</glossary-variable>

<glossary-variable color="purple">

### inappPlayerTitle

设置应用内播放器面板上的文本颜色：对于歌曲，它设置歌曲名称的颜色；对于语音消息，它显示发送时间，例如昨天上午 08：05。

</glossary-variable>

<glossary-variable color="orange">

### inappPlayerClose

设置应用内播放器面板中关闭按钮的颜色。

</glossary-variable>

<figure>

![](/images/musicplayer.3.png)

<figcaption>

红色区域显示 `inappPlayerbackground`，绿色区域显示 `inappPlayerPlayPause`，橙色区域显示 `inappPlayerClose`，蓝色下划线显示 `inappPlayerPerformer`，紫色区域显示 `inappPlayerTitle`。

</figcaption>
</figure>

**@ra1nb0wd4sh 的注释：** `inappPlayerClose` 影响 2 倍回放切换（出现在 4.8.10 中）在禁用状态下的颜色。启用时 `inappPlayerPlayPause` 影响其颜色。

<figure>

![](/images/musicplayer.4.png)

<figcaption>

2 倍回放切换

</figcaption>
</figure>

# Settings : attheme 设置界面样式

<glossary-variable color="red">

## windowBackgroundGrayShadow

在“设置”中设置各部分之间的阴影颜色。

</glossary-variable>

<figure>

![](/images/settings.0.png)

<figcaption>

红色区域显示 `windowBackgroundGrayShadow`。

</figcaption>
</figure>

## Icons

<glossary-variable color="red">

### changephoneinfo_image

在“设置”→“手机”中设置两张 SIM 卡的颜色以及它们之间的箭头。

</glossary-variable>

<glossary-variable color="green">

### sessions_devicesImage

设置仅在一台设备上登录时手机和平板电脑图像的颜色，显示在“设置”→“隐私和安全”→“活动会话”中。

</glossary-variable>

<figure>

![](/images/settings.1.png)

<figcaption>

红色区域显示 `chagephoneinfo_image`，绿色区域显示 `sessions_devicesImage`。

</figcaption>
</figure>

## Stickers and Themes sections

<glossary-variable color="blue">

### stickers_menu

设置贴纸包或主题旁边的三点图标的颜色。

</glossary-variable>

<glossary-variable color="red">

### stickers_menuSelector

设置点击“三点”图标时的涟漪颜色。

</glossary-variable>

<figure>

![](/images/settings.2.png)

<figcaption>

蓝色区域显示 `stickers_menu`，红色区域显示 `stickers_menuSelector`。

</figcaption>
</figure>

<glossary-variable color="orange">

### featuredStickers_addedIcon

设置你可以在添加的贴纸包或选定主题旁边看到的复选标记的颜色。

</glossary-variable>

<glossary-variable color="red">

### featuredStickers_addButton

设置“添加”按钮的背景。

</glossary-variable>

<glossary-variable color="blue">

### featuredStickers_addButtonSelected

设置按下“添加”按钮时该按钮的背景。

</glossary-variable>

<glossary-variable color="green">

### featuredStickers_buttonText

设置按钮上“添加”或“删除”（在聊天表情符号面板上）文本的颜色。

</glossary-variable>

<glossary-variable color="purple">

### featuredStickers_buttonProgress

设置添加或删除贴纸包时进度圈的颜色（在聊天表情符号面板上）。

</glossary-variable>

<figure>

![](/images/settings.3.png)

<figcaption>

显示 `featuredStickers_addButton` 红色区域、显示 `featuredStickers_addButtonSelected` 蓝色区域、显示 `featuredStickers_buttonText` 绿色区域、显示 `featuredStickers_addedIcon` 橙色区域和显示 `featuredStickers_buttonProgress` 紫色区域。

</figcaption>
</figure>

# Obsolete variables : attheme过时的变量

这些变量曾经使用过，但现在它们已从 Telegram 中删除，因为它们的元素已被删除或替换为其他变量。

-  `listSelector` —它与 `listSelectorSDK21` 合并；
-  `player_seekBarBackground` -元素已删除；
-  `player_duration` -元素已与 `player_time` 合并。

# Text : attheme 文字样式

<glossary-variable color="red">

## windowBackgroundWhiteBlackText

设置应用程序中几乎所有文本的颜色。

机器人内联结果标题**请注意：**的颜色也是由这个变量设置的，尽管结果的背景不是由 WindowBackgroundWhite 设置的，而是由聊天 _MessagePanelBackground 设置的。请考虑将消息面板背景设置为与 WindowBackgroundWhite 相同，或检查 BOT 结果的可读性。

</glossary-variable>

<figure>

![](/images/text.0.png)

<figcaption>

红色区域显示 `windowBackgroundWhiteBlackText`。

</figcaption>
</figure>

## Gray text

<glossary-variable color="red">

### windowBackgroundWhiteGrayText

在联系人中设置上次看到的时间颜色。

</glossary-variable>

<glossary-variable color="purple">

### windowBackgroundWhiteGrayText2

在“设置”中设置选项标题下的说明的颜色。同时设置标题 `graySection` 的颜色。

</glossary-variable>

<glossary-variable color="blue">

### windowBackgroundWhiteGrayText3

在“设置”→“隐私和安全”→“活动会话”中设置会话 IP 的颜色。

</glossary-variable>

<glossary-variable color="lightBlue">

### windowBackgroundWhiteGrayText4

在“设置”中设置部分下面的说明文本的颜色。

</glossary-variable>

<glossary-variable color="green">

### windowBackgroundWhiteGrayText5

在“设置”中的底部设置电报版本的颜色。

</glossary-variable>

<glossary-variable color="yellow">

### windowBackgroundWhiteGrayText6

设置文本字段（如“设置”→“电话”→“更改号码”）下方的描述文本的颜色，以及当你尝试创建频道时出现的“什么是频道？”屏幕中的信息文本的颜色（除非你已经有一个频道）。

**请注意：**此变量在“设置”→“隐私和安全”→“两步验证/密码锁”（当你设置了两步密码或密码锁密码时）中的灰色背景上设置文本的颜色，如“请输入你的密码”。

</glossary-variable>

<glossary-variable color="pink">

### windowBackgroundWhiteGrayText7

当你没有密码锁时，在“设置”→“隐私和安全”→“密码锁”中设置禁用项目的颜色。

</glossary-variable>

<glossary-variable color="brown">

### windowBackgroundWhiteGrayText8

在“设置”→“用户名”中设置信息文本的颜色。

</glossary-variable>

<figure>

![](/images/text.1.png)

<figcaption>

顶部的红色区域显示 `windowBackgroundWhiteGrayText`、紫色区域显示 `windowBackgroundWhiteGrayText2`、深蓝色区域显示 `windowBackgroundWhiteGrayText3`、浅蓝色区域显示 `windowBackgroundWhiteGrayText4`，绿色区域显示 `windowBackgroundWhiteGrayText5` 黄色区域 `windowBackgroundWhiteGrayText6`，底部的粉色区域显示 `windowBackgroundWhiteGrayText7`，棕色区域显示 `windowBackgroundWhiteGrayText8`。

</figcaption>
</figure>

## Red text

<glossary-variable color="red">

### windowBackgroundWhiteRedText

设置对话框上红色按钮的颜色，如设置→数据和存储→存储使用→清除缓存中的“清除缓存”按钮。

由于未知原因，你无法使用应用内编辑器更改此变量，因此你必须使用[.atTheme 编辑器](http://snejugal.ru/attheme-editor)更改此变量。

</glossary-variable>

<glossary-variable color="blue">

### windowBackgroundWhiteRedText2

设置“设置”中红色按钮的颜色，如“设置”→“隐私和安全”→“活动会话”中的“终止所有其他会话”按钮。

</glossary-variable>

<glossary-variable color="green">

### windowBackgroundWhiteRedText3

设置两步密码时，在设置→隐私和安全→两步验证中设置“中止两步验证设置”按钮的颜色。

</glossary-variable>

<glossary-variable color="purple">

### windowBackgroundWhiteRedText4

当你尝试使用少于 5 个符号或已使用的用户名时，设置文本字段（如“设置”→“用户名”）下方的警告文本的颜色。

</glossary-variable>

<glossary-variable color="lightBlue">

### windowBackgroundWhiteRedText5

设置警告按钮的颜色，如频道信息屏幕中的“离开频道”。

</glossary-variable>

<glossary-variable color="yellow">

### windowBackgroundWhiteRedText6

设置“重置我的帐户”按钮的颜色当你尝试登录具有两步验证密码的帐户，但你不记得它，尝试使用电子邮件恢复它，但你无法访问它。

此变量不能使用应用内编辑器更改（因为它会在你注销后关闭），因此你必须使用[.atTheme 编辑器](http://snejugal.ru/attheme-editor)更改此变量。

</glossary-variable>

<figure>

![](/images/text.2.png)

<figcaption>

红色区域显示 `windowBackgroundWhiteRedText`、深蓝色区域显示 `windowBackgroundWhiteRedText2`、绿色区域显示 `windowBackgroundWhiteRedText3`、紫色区域显示 `windowBackgroundWhiteRedText4`，浅蓝色区域显示 `windowBackgroundWhiteRedText5`，黄色区域显示 `windowBackgroundWhiteRedText6`。

</figcaption>
</figure>

## Green text

<glossary-variable color="red">

### windowBackgroundWhiteGreenText

设置文本字段下方的成功文本的颜色，如“设置”→“用户名”，当你使用没有人拥有且长度超过 5 个符号的用户名时。

</glossary-variable>

<glossary-variable color="blue">

### windowBackgroundWhiteGreenText2

设置绿色按钮的颜色，如与个人信息聊天屏幕中的“开始秘密聊天”。

</glossary-variable>

<figure>

![](/images/text.3.png)

<figcaption>

红色区域显示 `windowBackgroundWhiteGreenText`，蓝色区域显示 `windowBackgroundWhiteGreenText2`。

</figcaption>
</figure>

## Blue text

<glossary-variable color="red">

### windowBackgroundWhiteBlueHeader

在设置中设置节页眉的颜色。

</glossary-variable>

<glossary-variable color="purple">

### windowBackgroundWhiteBlueText

设置“联系人”中在线状态文本的颜色。

</glossary-variable>

<glossary-variable color="blue">

### windowBackgroundWhiteBlueText3

设置搜索结果中联机状态文本的颜色。

</glossary-variable>

<glossary-variable color="lightBlue">

### windowBackgroundWhiteBlueText4

在“设置”→“手机”中设置“更改号码”按钮的颜色，并在搜索结果中设置匹配突出显示。

</glossary-variable>

<glossary-variable color="green">

### windowBackgroundWhiteBlueText5

设置“什么是通道？”屏幕中的“创建通道”按钮的颜色，该按钮在你尝试创建新通道时出现（除非你已经有一个通道）。如果屏幕未显示，则使用[.atTheme 编辑器](http://snejugal.ru/attheme-editor)更改此变量。

</glossary-variable>

<glossary-variable color="orange">

### windowBackgroundWhiteBlueText6

设置购买物品时输入所有付款数据后支付按钮的颜色。你可以制作一个假支付，用[@ShopBot](https://t.me/shopbot)来查看按钮或用[.atTheme 编辑器](http://snejugal.ru/attheme-editor)来添加更改变量。

</glossary-variable>

<glossary-variable color="teal">

### windowBackgroundWhiteBlueText7

在位置附件屏幕中设置“发送当前位置”按钮的颜色。

</glossary-variable>

<glossary-variable color="lightGreen">

### windowBackgroundWhiteValueText

在“设置”中设置选项值“颜色”。

</glossary-variable>

<glossary-variable color="deepOrange">

### windowBackgroundWhiteLinkText

设置链接的颜色，如 #hashtags、@usernames 或聊天信息屏幕中的链接。

</glossary-variable>

<figure>

![](/images/text.4.png)

<figcaption>

红色区域显示 `windowBackgroundWhiteBlueHeader`、紫色区域显示 `windowBackgroundWhiteBlueText`、深蓝色区域显示 `windowBackgroundWhiteBlueText3`、浅蓝色区域显示 `windowBackgroundWhiteBlueText4`，绿色区域显示 `windowBackgroundWhiteBlueText5`，浅橙色区域为 `windowBackgroundWhiteBlueText6`，蓝绿色区域为 `windowBackgroundWhiteBlueText7`，浅绿色为 `windowBackgroundWhiteValueText`，深橙色区域为 `windowBackgroundWhiteLinkText`。

</figcaption>
</figure>

<glossary-variable color="red">

### windowBackgroundWhiteLinkSelection

设置点击链接时显示的覆盖颜色。

</glossary-variable>

<figure>

![](/images/text.5.png)

<figcaption>

红色区域显示 `windowBackgroundWhiteLinkSelection`。

</figcaption>
</figure>

# Controls : attheme 控件样式

## Text fields

如“设置”→“用户名”中的字段。

- 输入的文本颜色由 `windowBackgroundWhiteBlackText` 设置。

<glossary-variable color="red">

### windowBackgroundWhiteHintText

设置输入占位符的颜色—它是你在输入任何文本之前看到的文本。

</glossary-variable>

<glossary-variable color="indigo">

### windowBackgroundWhiteInputField

当输入处于非活动状态时，设置底部边框颜色。

</glossary-variable>

<glossary-variable color="green">

### windowBackgroundWhiteInputFieldActivated

当输入处于活动状态时，设置底部边框颜色。

</glossary-variable>

<figure>

![](/images/controls.input.png)

<figcaption>

红色区域显示 `windowBackgroundWhiteHintText`，蓝色区域显示 `windowBackgroundWhiteInputField`，绿色区域显示 `windowBackgroundWhiteInputFieldActivated`。

</figcaption>
</figure>

## Switch

就像在设置中。

<glossary-variable color="indigo">

### switchTrack

当开关关闭时，设置开关轨迹（其背景）的颜色。

</glossary-variable>

<glossary-variable color="red">

### switchThumb

当开关关闭时，设置开关滑块（开关末端的圆圈）的颜色。

</glossary-variable>

<glossary-variable color="teal">

### switchTrackChecked

设置打开时切换轨迹的颜色。

</glossary-variable>

<glossary-variable color="pink">

### switchThumbChecked

设置开关打开时开关滑块的颜色。

</glossary-variable>

<figure>

![](/images/controls.switch.png)

<figcaption>

显示 `switchThumb` 红色区域、显示 `switchTrack` 蓝色区域、显示 `switchTrackChecked` 绿色区域和显示 `switchThumbChecked` 粉色区域。

</figcaption>
</figure>

## Checkbox

就像在聊天信息→通知→自定义。

<glossary-variable color="red">

### checkboxSquareUnchecked

设置复选框未选中时的边框。

</glossary-variable>

<glossary-variable color="orange">

### checkboxSquareDisabled

设置复选框禁用时的背景。就像在未转换为超级组的组的设置中一样。

</glossary-variable>

<glossary-variable color="indigo">

### checkboxSquareBackground

设置复选框被选中时的背景。

</glossary-variable>

<glossary-variable color="green">

### checkboxSquareCheck

设置选中复选框时复选标记的颜色。

</glossary-variable>

<figure>

![](/images/controls.checkbox.png)

<figcaption>

显示 `checkboxSquareUnchecked` 红色区域、显示 `checkboxSquareBackground` 蓝色区域、显示 `checkboxSquareCheck` 绿色区域和显示 `checkboxSquareDisabled` 橙色区域。

</figcaption>
</figure>

## Openable list control

在“设置”→“电话”→“更改号码”中选择你的国家名称。

<glossary-variable color="red">

### windowBackgroundGrayLine

设置此元素的边框颜色。

</glossary-variable>

<figure>

![](/images/controls.selection.png)

<figcaption>

红色区域显示 `windowBackgroundGrayLine`。

</figcaption>
</figure>

## Progress indicators

<glossary-variable color="red">

### contextProgressInner1

设置保存已编辑消息时的进度指示器。

</glossary-variable>

<glossary-variable color="red">

### contextProgressOuter1

设置保存已编辑消息时的进度指示器。

</glossary-variable>

<glossary-variable color="green">

### contextProgressInner2

当正在创建组或正在加载游戏时，设置操作栏上的进度指示器。

</glossary-variable>

<glossary-variable color="green">

### contextProgressOuter2

当正在创建组或正在加载游戏时，设置操作栏上的进度指示器。

</glossary-variable>

<glossary-variable color="indigo">

### contextProgressInner3

使用“即时视图”打开链接时，在顶栏上设置进度指示器。只能使用 [ `.attheme editor`] 更改这些变量。

</glossary-variable>

<glossary-variable color="indigo">

### contextProgressOuter3

使用“即时视图”打开链接时，在顶栏上设置进度指示器。只能使用 [ `.attheme editor`] 更改这些变量。

</glossary-variable>

<glossary-variable color="amber">

### login_progressInner

当你登录并等待 Telegram 自动处理的呼叫时，设置计时器计数进度指示器（通常 Telegram 在你登录另一台设备时进行呼叫，但你无法访问它以获取登录代码）。

</glossary-variable>

<glossary-variable color="amber">

### login_progressOuter

当你登录并等待 Telegram 自动处理的呼叫时，设置计时器计数进度指示器。

</glossary-variable>

<figure>

![](/images/controls.progress.0.png)

<figcaption>

红色区域显示 `contextProgressInner1` AND `contextProgressOuter1`，绿色区域显示 `contextProgressInner2` AND `contextProgressOuter2`，紫色区域显示和 `contextProgressInner3` `contextProgressOuter3`，橙色区域 `login_progressInner` 显示和 `login_progressOuter`。

</figcaption>
</figure>

[]: `.attheme editor` https://attheme-editor.snejugal.ru

<glossary-variable color="red">

### progressCircle

设置列表下方加载指示器的颜色。

</glossary-variable>

<figure>

![](/images/controls.progress.1.png)

<figcaption>

红色区域显示 `progressCircle`。

</figcaption>
</figure>

### Profile screen

<glossary-variable color="red">

#### profile_actionBackground

设置按钮背景。

</glossary-variable>

<glossary-variable color="amber">

#### profile_actionPressedBackground

设置按下按钮时的按钮覆盖。

</glossary-variable>

<glossary-variable color="green">

#### profile_actionIcon

设置轮廓附近图标的颜色。在你是管理员的组中，此图标是“设置图片图标”，而在查看配置文件时，它是“新消息”按钮或位置附加屏幕上的“移动到当前位置”。

</glossary-variable>

<figure>

![](/images/controls.actionButton.png)

<figcaption>

红色区域显示 `profile_actionBackground`，橙色区域显示 `profile_actionPressedBackground`，绿色区域显示 `profile_actionIcon`。

</figcaption>
</figure>

# Avatars : attheme 头像样式

如果用户没有个人资料图片或尚未加载，则会显示一个带有随机颜色和一个或两个字母的彩色圆圈。

<glossary-variable color="gray">

## avatar_text

设置已卸载头像上字母的颜色。

</glossary-variable>

# Lists : attheme 聊天列表样式

<glossary-variable color="red">

## divider

设置分隔列表项的灰色线条的颜色。

</glossary-variable>

<glossary-variable color="blue">

## listSelectorSDK21

设置点击列表项目时涟漪效果的颜色。

</glossary-variable>

<glossary-variable color="green">

## emptyListPlaceholder

设置打开空列表时占位符文本（无内容时显示的文本）的颜色。如果你没有任何音乐，你可以在聊天屏幕→附加-音乐中看到它。如果这样做，你可以暂时将它们从“音乐”文件夹中移出，并在完成后将它们移回。

</glossary-variable>

<figure>

![](/images/list.0.png)

<figcaption>

红色区域显示 `divider`，蓝色区域显示 `listSelectorSDK21`，绿色区域显示 `emptyListPlaceholder`。

</figcaption>
</figure>

# Chats list : attheme 控件样式

## General variables

<glossary-variable color="blue">

### chats_message

设置聊天标题下方消息的颜色。

</glossary-variable>

<glossary-variable color="orange">

### chats_date

设置聊天右上角的时间或日期颜色。

</glossary-variable>

<glossary-variable color="red">

### chats_nameMessage

按组设置发件人姓名颜色。

</glossary-variable>

<glossary-variable color="lightGreen">

### chats_actionMessage

设置文本的颜色，如“你加入了频道”，以及附加的消息类型（如照片，GIF，视频等），如果发件人姓名被省略。

</glossary-variable>

<glossary-variable color="green">

### chats_attachMessage

如果未省略发件人姓名，则设置附加邮件类型，如照片、视频、音频等。

</glossary-variable>

<glossary-variable color="purple">

### chats_draft

设置“草稿”文本颜色，当你键入一些文本，然后关闭聊天而不发送时，将显示该颜色。

</glossary-variable>

<figure>

![](/images/chatslist.0.png)

<figcaption>

显示 `chats_message` 蓝色下划线，显示 `chats_date` 橙色下划线，显示 `chats_nameMessage` 红色下划线、显示 `chats_actionMessage` 浅绿色下划线、显示 `chats_attachMessage` 深绿色线条和显示 `chats_draft` 紫色线条。

</figcaption>
</figure>

## Typical chats

<glossary-variable color="green">

### chats_name

设置聊天的标题颜色。

</glossary-variable>

<glossary-variable color="red">

### chats_nameIcon

如果聊天是频道或组，则设置聊天的图标颜色。

</glossary-variable>

<figure>

![](/images/chatslist.1.png)

<figcaption>

红色下划线显示 `chats_nameIcon`，绿色线条显示 `chats_name`。

</figcaption>
</figure>

## Secret chats

<glossary-variable color="blue">

### chats_secretName

设置秘密聊天标题的颜色。

</glossary-variable>

<glossary-variable color="red">

### chats_secretIcon

设置秘密聊天图标的颜色。

</glossary-variable>

<figure>

![](/images/chatslist.2.png)

<figcaption>

红色下划线显示 `chats_secretIcon`，蓝色下划线显示 `chats_secretName`。

</figcaption>
</figure>

## Unread counter

<glossary-variable color="red">

### chats_unreadCounter

设置聊天未静音时未读计数器背景的背景色。此外，如果你在聊天中被提及，它还会设置提及图标（“@”）的背景。

</glossary-variable>

<glossary-variable color="green">

### chats_unreadCounterMuted

设置聊天静音时未读计数器背景的背景色。

</glossary-variable>

<glossary-variable color="purple">

### chats_unreadCounterText

设置未读计数器的文本颜色，与聊天是否静音无关。

</glossary-variable>

由于未知原因，无法更改**注意：**“@”提及图标。

<figure>

![](/images/chatslist.3.png)

<figcaption>

红色区域显示 `chats_unreadCounter`，绿色区域显示 `chats_unreadCounterMuted`，紫色区域显示 `chats_unreadCounterText`。

</figcaption>
</figure>

## Verified icon

<glossary-variable color="green">

### chats_verifiedBackground

设置已验证图标的背景色。

</glossary-variable>

<glossary-variable color="red">

### chats_verifiedCheck

设置已验证图标内的复选标记颜色。

</glossary-variable>

<figure>

![](/images/chatslist.4.png)

<figcaption>

已验证图标的示例。

</figcaption>
</figure>

## “Send message” button

<glossary-variable color="red">

### chats_actionBackground

设置“新信息”按钮的背景。

</glossary-variable>

<glossary-variable color="green">

### chats_actionPressedBackground

设置按下“新消息”按钮时的覆盖。覆盖意味着，如果你将此变量的 Alpha 通道设置为小于 255，按钮将不会变得透明，但它将混合两种颜色。它只覆盖背景，而不覆盖图标。

</glossary-variable>

<glossary-variable color="yellow">

### chats_actionIcon

设置“新消息”按钮上的图标。

</glossary-variable>

<figure>

![](/images/chatslist.5.png)

<figcaption>

红色区域是 `chats_actionBackground`，绿色区域是 `chats_actionPressedBackground`，黄色区域是 `chats_actionIcon`。

</figcaption>
</figure>

## Left menu

此菜单上的选择器是 ListSelectorSDK21，因为该菜单是一个列表。

<glossary-variable color="red">

### chats_menuBackground

设置左侧面板的背景色。

</glossary-variable>

<glossary-variable color="green">

### chats_menuItemText

设置左侧面板上的文本颜色。

</glossary-variable>

<figure>

![](/images/chatslist.6.png)

<figcaption>

显示 `chats_menuBackground` 红色区域和绿色下划线 `chats_menuItemText`。

</figcaption>
</figure>

# Calls :  attheme 拨打电话样式

## Calls log

<glossary-variable color="red">

### calls_callReceivedGreenIcon

设置呼叫日志或聊天屏幕中成功呼叫的颜色。

</glossary-variable>

<glossary-variable color="green">

### calls_callReceivedRedIcon

设置呼叫日志或聊天屏幕中失败呼叫的颜色。

</glossary-variable>

<figure>

![](/images/calls.0.png)

<figcaption>

红色区域显示 `calls_callReceivedGreenIcon`，绿色区域显示 `calls_callReceivedRedIcon`。

</figcaption>
</figure>

## “Rate the quality” prompt

在你拨打电话并结束通话后，将出现“评价质量”提示。如果你转到“通话记录”，按住“历史记录”项并点击“费率通话”，也可以强制显示提示。遗憾的是，你只能使用[.atTheme 编辑器](http://snejugal.ru/attheme-editor)编辑提示的元素。

<glossary-variable color="blue">

### calls_ratingStar

设置提示上未选择的星形的边框颜色。

</glossary-variable>

<glossary-variable color="red">

### calls_ratingStarSelected

设置提示符上所选星形的填充颜色。

</glossary-variable>

<figure>

![](/images/calls.1.png)

<figcaption>

红色区域显示 `calls_ratingStarSelected`，蓝色区域显示 `calls_ratingStar`。

</figcaption>
</figure>

# Action bar : attheme 活动栏目样式

## Default mode

<glossary-variable color="red">

### actionBarDefault

设置应用程序标题背景颜色。状态栏的背景是自动生成的（在 Android 5.0 及以上版本上）。应用内播放器标题、设置和聊天信息中的标题以及选择任何消息时显示的标题都有其他变量。

</glossary-variable>

<glossary-variable color="lightBlue">

### actionBarDefaultIcon

设置操作栏上图标的颜色。

</glossary-variable>

<glossary-variable color="yellow">

### actionBarDefaultTitle

设置操作栏上的标题颜色。

</glossary-variable>

<glossary-variable color="green">

### actionBarDefaultSelector

设置点击操作栏上的图标时显示的圆的颜色。

</glossary-variable>

<glossary-variable color="orange">

### actionBarDefaultSubtitle

设置标题下方文本的颜色，如成员数量、上次出现时间或“键入…”状态。

</glossary-variable>

<figure>

![](/images/actionbar.0.png)

<figcaption>

显示 `actionBarDefault` 红色区域、显示 `actionBarDefaultIcon` 浅蓝色区域、显示 `actionBarDefaultTitle` 黄色区域、显示 `actionBarDefaultSelector` 绿色区域和显示 `actionBarDefaultSubtitle` 橙色区域。

</figcaption>
</figure>

## Action mode

操作模式是顶栏对话框，当选择聊天气泡进行回复、转发或编辑，或选择聊天共享媒体中的共享文件、音乐或链接帖子，或在消息面板中附加文件时，将打开该对话框。

<glossary-variable color="red">

### actionBarActionModeDefault

设置动作模式面板的叠加颜色。如果将此变量的 Alpha 通道设置为小于 255，则将显示默认操作栏。

</glossary-variable>

<glossary-variable color="blue">

### actionBarActionModeDefaultIcon

设置面板上图标的颜色以及选定项目的数量。

</glossary-variable>

<glossary-variable color="orange">

### actionBarActionModeDefaultSelector

设置点击面板上的图标时显示的圆的颜色。

</glossary-variable>

<glossary-variable color="green">

### actionBarActionModeDefaultTop

设置状态栏背景颜色，但它仍然会变暗 20%。将此变量的 Alpha 通道设置为零会将状态栏颜色设置为 `actionBarActionModeDefault` 值。

</glossary-variable>

<figure>

![](/images/actionbar.1.png)

<figcaption>

显示 `actionBarActionModeDefault` 红色区域、显示 `actionBarActionModeDefaultTop` 绿色区域、显示 `actionBarActionModeDefaultIcon` 蓝色区域和显示 `actionBarActionModeDefaultSelector` 橙色区域。

</figcaption>
</figure>

## Submenu

子菜单是点击操作栏上的三点图标时显示的菜单。

Photo Viewer 中**注意：**的子菜单以前依赖于下面的变量，但现在不再依赖了。

<glossary-variable color="red">

### actionBarDefaultSubmenuBackground

设置子菜单的背景。

</glossary-variable>

<glossary-variable color="blue">

### actionBarDefaultSubmenuItem

设置子菜单按钮的文本颜色。

</glossary-variable>

<figure>

![](/images/actionbar.2.png)

<figcaption>

红色区域显示 `actionBarDefaultSubmenuBackground`，蓝色区域显示 `actionBarDefaultSubmenuItem`。

</figcaption>
</figure>

## Search

<glossary-variable color="red">

### actionBarDefaultSearchPlaceholder

设置未在搜索字段中输入任何文本时可以看到的文本的颜色。

</glossary-variable>

<glossary-variable color="green">

### actionBarDefaultSearch

设置搜索字段中输入文本的颜色。

</glossary-variable>

<figure>

![](/images/actionbar.3.png)

<figcaption>

红色区域显示 `actionBarDefaultSearchPlaceholder`，绿色区域显示 `actionBarDefaultSearch`。

</figcaption>
</figure>

## “What is a channel?” screen

如果你没有创建任何频道，当你尝试创建新频道时，会出现“什么是频道？”屏幕。如果你这样做了，则只能使用[.atTheme 编辑器](http://snejugal.ru/attheme-editor)更改变量。

<glossary-variable color="red">

### actionBarWhiteSelector

设置点击后退按钮时的圆圈颜色。

</glossary-variable>

<figure>

![](/images/actionbar.4.png)

<figcaption>

红色区域显示 `actionBarWhiteSelector`。

</figcaption>
</figure>

# Dialogs : attheme 对话框样式

对话框是位于屏幕底部或中间的面板。例如，当你点击消息时出现的消息，或者当你在聊天列表上进行聊天时出现的消息。

## Backgrounds

<glossary-variable color="red">

### dialogBackground

设置对话框的背景。

</glossary-variable>

<glossary-variable color="green">

### dialogBackgroundGray

在 Supergroup Settings（超组设置）→ Event Log（事件日志）→ Settings（设置）中设置节之间的小间距。

</glossary-variable>

<figure>

![](/images/dialogs.bg.png)

<figcaption>

红色区域显示 `dialogBackground`，绿色区域显示 `dialogBackgroundGray`。

</figcaption>
</figure>

## Text

<glossary-variable color="red">

### dialogTextBlack

设置对话框上几乎所有文本的颜色。

</glossary-variable>

<figure>

![](/images/dialogs.text.0.png)

<figcaption>

红色下划线显示 `dialogTextBlack`。

</figcaption>
</figure>

<glossary-variable color="red">

### dialogTextGray2

设置“附加”面板上说明的颜色。

</glossary-variable>

<figure>

![](/images/dialogs.text.1.png)

<figcaption>

红色下划线显示 `dialogTextGray2`。

</figcaption>
</figure>

### Blue text

<glossary-variable color="red">

#### dialogLinkSelection

点击时，设置“标签包名称”参考底图中的链接。

</glossary-variable>

<figure>

![](/images/dialogs.text.2.png)

<figcaption>

红色下划线显示 `dialogTextBlack`。

</figcaption>
</figure>

## Decorative elements

<glossary-variable color="red">

### dialogIcon

设置图标的颜色。例如，当你在聊天列表上进行聊天时出现的那些。

</glossary-variable>

<glossary-variable color="green">

### dialogGrayLine

设置你可以在应用内视频播放器面板中看到的边框颜色。你可以通过将 YouTube 视频链接附加到你的邮件，然后点击视频预览图像来打开它。

</glossary-variable>

<figure>

![](/images/dialogs.text.delem.png)

<figcaption>

红色区域显示 `dialogIcon`，绿色区域显示 `dialogGrayLine`。

</figcaption>
</figure>

## Badge

<glossary-variable color="red">

### dialogBadgeBackground

设置徽章的背景颜色—转发邮件或添加贴纸时看到的计数器。

</glossary-variable>

<glossary-variable color="green">

### dialogBadgeText

设置转发邮件时徽章上的文本颜色，但不设置添加贴纸时徽章上的文本颜色—它是由选取器 _BadgeText 设置的。

</glossary-variable>

<figure>

![](/images/dialogs.badge.png)

<figcaption>

红色区域显示 `dialogBadgeBackground`，绿色区域显示 `dialogBadgeText`。

</figcaption>
</figure>

## Controls

### Buttons

<glossary-variable color="red">

#### dialogButton

设置出现在屏幕中间的对话框上的按钮的文本颜色，例如，当你删除邮件时。

</glossary-variable>

<glossary-variable color="green">

#### dialogButtonSelector

设置点击按钮时按钮的背景颜色。

</glossary-variable>

<figure>

![](/images/dialogs.btn.png)

<figcaption>

红色下划线显示 `dialogButton`，绿色区域显示 `dialogButtonSelector`。

</figcaption>
</figure>

### Radio buttons

他们应该在对话框上设置单选按钮的颜色，但由于一些未知的原因，他们没有这样做。

<glossary-variable color="gray">

#### dialogRadioButton

</glossary-variable>

<glossary-variable color="gray">

#### dialogRadioButtonChecked

</glossary-variable>

### Square checkboxes

设置方形复选框的相同元素，但在对话框上。

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

红色区域显示 `dialogCheckboxSquareUnchecked`、蓝色区域显示 `dialogCheckboxSquareBackground`、绿色区域显示 `dialogCheckboxSquareCheck` 和橙色区域显示 `dialogCheckboxSquareDisabled`（请注意，这是禁用复选框的外观，但我们不确定这一点，因为我们不知道它在哪里使用）。

</figcaption>
</figure>

### Round checkboxes

<glossary-variable color="red">

#### dialogRoundCheckBox

设置当你在转发面板上选择要转发消息的聊天时显示的圆形背景。

</glossary-variable>

<glossary-variable color="green">

#### dialogRoundCheckBoxCheck

设置该圆上的复选标记的颜色。

</glossary-variable>

<figure>

![](/images/dialogs.rCheckbox.png)

<figcaption>

红色区域显示 `dialogRoundCheckBox`，绿色区域显示 `dialogRoundCheckBoxCheck`。

</figcaption>
</figure>

## Text fields

<glossary-variable color="red">

### dialogInputField

当文本字段处于非活动状态时，设置文本字段的底部边框。当你将呼叫评定为 4 星或更低时，会看到非活动状态；当你在呼叫日志中保留呼叫时，你可以获得“费率呼叫”提示。

</glossary-variable>

<glossary-variable color="green">

### dialogInputFieldActivated

当文本字段处于活动状态时，设置文本字段下方底部边框的颜色—对话框中的几乎所有文本字段在显示后立即显示。

</glossary-variable>

<figure>

![](/images/dialogs.field.png)

<figcaption>

红色区域显示 `dialogInputField`，绿色区域显示 `dialogInputFieldActivated`。

</figcaption>
</figure>

## Progress indicators

<glossary-variable color="red">

### dialogLineProgressBackground

设置保存到下载任何文件时可以看到的行进度的背景颜色（聊天屏幕上文件旁边的三个点→保存到下载）。

</glossary-variable>

<glossary-variable color="green">

### dialogLineProgress

设置显示已下载百分比的行的颜色。

</glossary-variable>

<figure>

![](/images/dialogs.progress.png)

<figcaption>

红色区域显示 `dialogLineProgressBackground`，绿色区域显示 `dialogLineProgress`。

</figcaption>
</figure>

## Attach panel

<glossary-variable color="red">

### dialogScrollGlow

设置快速滚动“附加”面板时可以看到的发光颜色。

</glossary-variable>

<figure>

![](/images/dialogs.attachpanel.0.png)

<figcaption>

黑色的光芒是 `dialogScrollGlow`。在默认主题中，它是白色的，而在这个示例图像中，它是黑色的，因此可以清楚地看到它。

</figcaption>
</figure>

下一个变量设置附加按钮的背景颜色。

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

下一个变量设置附加按钮的图标颜色。

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

按钮的背景更改为 `chat_attach*Background`，其图标更改为 `chat_attach*Icon`。

</figcaption>
</figure>

<figure>

![](/images/dialogs.attachpanel.2.png)

<figcaption>

此按钮是 `chat_attachSendBackground`（当你选择至少一张要发送的照片时显示）。

</figcaption>
</figure>

下一个变量设置相机图标的“叶子”的颜色，以顺时针方向。

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

数字显示图标的每个“叶子”的位置。

</figcaption>
</figure>

- 按钮下面的描述的颜色是 `dialogTextGray2`。

