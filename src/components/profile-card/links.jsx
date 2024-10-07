import WhatsApp from "../../assets/social-media/whatsapp/colored.svg";
import LinkedIn from "../../assets/social-media/linkedin/colored.svg";
import GitHub from "../../assets/social-media/github/colored.svg";
import Discord from "../../assets/social-media/discord/colored.svg";
import Instagram from "../../assets/social-media/instagram/colored.svg";
import Facebook from "../../assets/social-media/facebook/colored.svg";
import X from "../../assets/social-media/x/colored.svg";

import WhatsAppMono from "../../assets/social-media/whatsapp/mono.svg";
import LinkedInMono from "../../assets/social-media/linkedin/mono.svg";
import GitHubMono from "../../assets/social-media/github/mono.svg";
import DiscordMono from "../../assets/social-media/discord/mono.svg";
import InstagramMono from "../../assets/social-media/instagram/mono.svg";
import FacebookMono from "../../assets/social-media/facebook/mono.svg";
import XMono from "../../assets/social-media/x/mono.svg";

const LINKS = [
	{
		src: WhatsApp,
		altsrc: WhatsAppMono,
		alt: "WhatsApp",
		href: "https://wa.me/573197955021",
		key: crypto.randomUUID(),
	},
	{
		src: LinkedIn,
		altsrc: LinkedInMono,
		alt: "LinkedIn",
		href: "https://www.linkedin.com/in/andrés-ui-ux-frontend",
		key: crypto.randomUUID(),
	},
	{
		src: GitHub,
		altsrc: GitHubMono,
		alt: "GitHub",
		href: "https://github.com/skikun",
		key: crypto.randomUUID(),
	},
	{
		src: Discord,
		altsrc: DiscordMono,
		alt: "Discord",
		href: "https://discord.gg/QUAyrCTaXW",
		key: crypto.randomUUID(),
	},
	{
		src: Instagram,
		altsrc: InstagramMono,
		alt: "Instagram",
		href: "https://www.instagram.com/skikun_",
		key: crypto.randomUUID(),
	},
	{
		src: Facebook,
		altsrc: FacebookMono,
		alt: "Facebook",
		href: "https://web.facebook.com/xSkikun",
		key: crypto.randomUUID(),
	},
	{
		src: X,
		altsrc: XMono,
		alt: "X",
		href: "https://x.com/ski_kun",
		key: crypto.randomUUID(),
	},
];

export default LINKS;
