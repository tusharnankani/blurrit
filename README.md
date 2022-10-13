<br />
<p align="center">
  <img src="./assets/cover.png" width="80%" />
    <br />
</p>
<p align="right">
  <sub>Built with <a src="https://figma.com">Figma</a>.</sub>
</p>
<br />

<p align="center">
  <br />
  <a href="#table-of-content"><b>Explore the docs »</b></a>
  <br />
  <br />
  <a href="#features">Features</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#motivation">Motivation</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#local-setup">Local Setup</a>
  <br />
</p>
<br />

### Table of Content

- [Table of Content](#table-of-content)
- [Features](#features)
- [Motivation](#motivation)
- [Local Setup](#local-setup)

### Features

- Blurs the list of chats (Left side) of the WhatsApp Web view.
- Blurs the WhatsApp name of the message.

##### Extension in Action

<table>
    <tr>
        <td>
            <img src='assets/demo_light.png' width="100%" alt='A snapshot of blurrit extension in action with WhatsApp Web in light mode'>
        </td>
    </tr>
    <tr>
      <td>
            <img src='assets/demo_dark.png' width="100%" alt='A snapshot of blurrit extension in action with WhatsApp Web in light mode'>
      </td>
    </tr>
</table>

<br />

### Motivation

- Ever felt your privacy invaded when you are logged into WhatsApp Web when you are sharing your screen in a meet or on a projector?
- Or are there times when someone is sitting beside you and sees your WhatsApp chats or who you have been texting?
- Or are there times when you want to share a screenshot with the names hidden?

Moreover, the fact that when I went to look for a solution, found [the perfect one](https://wawplus.com) to be paid. So, why not build one for free?

<sub>Also, wanted to build <strike>an extension</strike> desparately.</sub>

### Local Setup

- Clone the [repository](https://github.com/tusharnankani/blurrit): `git clone https://github.com/tusharnankani/blurrit.git` or [download the zip file](https://github.com/tusharnankani/blurrit/archive/refs/heads/main.zip).
  - Unzip it by right clicking on `blurrit-main` (in your downloads)
  - And then clicking on `Extract All`.
- Extensions can be [loaded in unpacked mode](https://developer.chrome.com/extensions/getstarted#unpacked) by following the following steps.
- Visit `chrome://extensions` or `edge://extensions` (via menu -> Tools -> Extensions).
- Enable `Developer mode` by ticking the checkbox.

![image](https://user-images.githubusercontent.com/61280281/195565460-fc5858ff-0deb-4e8e-b748-bf98f41065df.png)
![image](https://user-images.githubusercontent.com/61280281/195565486-beda6a03-4760-4262-804b-e569dc51d524.png)

- Click on the "Load unpacked extension." button.

![image](https://user-images.githubusercontent.com/61280281/195565525-d68435a4-4eb4-4082-a4e7-44ed0bf830e7.png)

- Select the locally cloned repository or the unzipped folder (`blurrit-main` in this case) which has `manifest.json` in the root to unpack the extension.
- Visit [web.whatsapp.com](https://web.whatsapp.com); because **blurrit** is ready to use.

<br />
<sub>Built with <strike>sweat, blood and love</strike> JavaScript, by Tushar Nankani.</sub>
