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
- [Extension in Action](#extension-in-action)
- [Motivation](#motivation)
- [Local Setup](#local-setup)

Read the [Privacy Statement](privacy).

<br/>

### Features

- Blurs the list of chats (Left side) of the WhatsApp Web view.
- Blurs the WhatsApp Chat Name of the message.
- Blurs the WhatsApp Author Name of the message.
- Momentarily un-blurs on hovering the blurred regions.
- Toggles blur on clicking the extension.

### Extension in Action

**Blurs onLoad**

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

**Major UX Update**:

- All of the [potential enhancements](https://github.com/tusharnankani/blurrit/issues/4) expect a toggle button/checkbox for customizations.
- Came up with a better fix — Removing the click overall (UX 101)
- Now, if you'll just hover on the blurred region; you will be able to momentarily see the hovered plus blurred region.

**Simple OnClick Toggle**:

- Click on the extension to toggle the blur.

**Keyboard Shortcut (Hot-Key) Toggle**

Use the shortcut to toggle the blur.
- Windows: `Ctrl` + `Shift` + `Z`
- Mac: `Command` + `Shift` + `Z`

<sup>lowkey proud of the alignment and accessibility of these keys.</sup>

<br />

### Motivation

- Ever felt your privacy invaded when you are logged into WhatsApp Web when you are sharing your screen in a meet or on a projector?
- Or are there times when someone is sitting beside you and sees your WhatsApp chats or who you have been texting?
- Or are there times when you want to share a screenshot with the names hidden?

Moreover, the fact that when I went to look for a solution, found [the perfect one](https://wawplus.com) to be paid. So, why not build one for free?

<sub>Also, wanted to build <strike>an extension</strike> desparately.</sub>

<br />

### Local Setup

- Clone the [repository](https://github.com/tusharnankani/blurrit) or [download the zipped file](https://github.com/tusharnankani/blurrit/archive/refs/heads/main.zip).

<details>
 <summary>Downloading Extension</summary>
  <br/>
  <img src="https://user-images.githubusercontent.com/61280281/195568443-14dea23f-b7c8-4469-9ba2-57b85eac3ae1.png" />
</details>

<br />

- Unzip it by right clicking on `blurrit-main` (in your downloads)
- And then clicking on `Extract All`.

<details>
 <summary>Unzipping the download</summary>
  <br/>
  <img src="https://user-images.githubusercontent.com/61280281/195569135-36681d22-b7f4-4c2b-ba8c-34d72779c33f.png" />
</details>

<br />

- Extensions can be [loaded in unpacked mode](https://developer.chrome.com/extensions/getstarted#unpacked) by following the following steps.
- Visit `chrome://extensions` or `edge://extensions` (via menu -> Tools -> Extensions).
- `Enable Developer mode` by ticking the checkbox.

<details>
 <summary>Enabling Developer Mode</summary>
  <br/>
  <img src="https://user-images.githubusercontent.com/61280281/195565460-fc5858ff-0deb-4e8e-b748-bf98f41065df.png" />
  <img src="https://user-images.githubusercontent.com/61280281/195565486-beda6a03-4760-4262-804b-e569dc51d524.png" />
</details>

<br />

- Click on the `Load unpacked extension` button.
- Select the locally cloned repository or the unzipped folder (`blurrit-main` in this case) which has `manifest.json` in the root to unpack the extension.

<details>
 <summary>Selecting the folder</summary>
  <br/>
  <img src="https://user-images.githubusercontent.com/61280281/195565525-d68435a4-4eb4-4082-a4e7-44ed0bf830e7.png" />
  <p>Selecting after unzipping the folder.</p>
  <img src="https://user-images.githubusercontent.com/61280281/195569760-d9b14d46-4330-460d-aad7-d1b602ef367f.png" width="60%"/>
  <p>Or selecting after cloning the repository.</p>
  <img src="https://user-images.githubusercontent.com/61280281/195569572-e5cbe319-c5dd-4c12-8f41-13f18df0aa37.png" width="60%" />
  <br/>
</details>

<br />
  
- Visit [web.whatsapp.com](https://web.whatsapp.com); because **blurrit** is ready to use.

<br />
<sub>Built with <strike>sweat, blood and love</strike> JavaScript, by <a href="https://tusharnankani.github.io">Tushar Nankani.</a></sub>
