import { LogoTwitter, LogoGithub, Key, Mail } from 'react-ionicons';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-700 transition hover:text-gray-500"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Home() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "white" : "black";

  const [song, setSong] = useState({ name: null, artist: null, photo: null, playing: false });

  async function updateSong() {
    const res = await fetch("https://api.lanyard.rest/v1/users/524681391959441419");
  
    if (res.ok) {
      const parsedResponse = (await res.json());
  
      if (parsedResponse.success && parsedResponse.data.listening_to_spotify)
        setSong({ name: parsedResponse.data.spotify.song, artist: parsedResponse.data.spotify.artist, photo: parsedResponse.data.spotify.album_art_url, playing: true });
      else setSong({ name: null, artist: null, photo: null, playing: false });
    }
  }

  useEffect(async () => {
    await updateSong();
    setInterval(async () => await updateSong(), 1 * 1000);
  }, [])

  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Hey, I'm Kaan <span className="emoji-wave">👋</span>
      </h1>
      <div className="flex mb-4 space-x-4">
        <ExternalLink href="https://twitter.com/kaanmtl17">
          <span className="sr-only">Twitter</span>
          <LogoTwitter color={color} />
        </ExternalLink>
        <ExternalLink href="https://github.com/kaanmutlu17">
          <span className="sr-only">Github</span>
          <LogoGithub color={color} />
        </ExternalLink>
        <ExternalLink href="https://keybase.io/kaanmutlu">
          <span className="sr-only">Keybase</span>
          <Key color={color} />
        </ExternalLink>
        <ExternalLink href="mailto:kaan@kaan.sh">
          <span className="sr-only">Email</span>
          <Mail color={color} />
        </ExternalLink>
      </div>
      <h2 className="mb-10 text-gray-600 dark:text-gray-400">
        CEO & Founder of Sanvia Digital | Software Developer
      </h2>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        About
      </h1>
      <h2 className="mb-10 text-gray-600 dark:text-gray-400">
        Hello, I'm Kaan Mutlu. I am a 16 year old software developer. I am also the CEO & Founder of Sanvia Digital media company. You can click the mail icon to contact me.
      </h2>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Contact
      </h1>
      <h2 className="mb-1 text-gray-600 dark:text-gray-400">
        LinkedIn: <ExternalLink href="https://linkedin.com/in/kaanmutlu17"><code>kaanmutlu17</code></ExternalLink>
      </h2>
      <h2 className="mb-1 text-gray-600 dark:text-gray-400">
        Instagram: <ExternalLink href="https://instagram.com/kaanmutlu17"><code>@kaanmutlu17</code></ExternalLink>
      </h2>
      <h2 className="mb-1 text-gray-600 dark:text-gray-400">
        Discord: <ExternalLink href="https://discord.com/users/524681391959441419"><code>Kaan#0005</code></ExternalLink>
      </h2>
      <h2 className="mb-1 text-gray-600 dark:text-gray-400">
        E-Mail: <ExternalLink href="mailto:kaan@kaan.sh"><code>kaan@kaan.sh</code></ExternalLink>
      </h2>
      <h2 className="mb-1 text-gray-600 dark:text-gray-400">
        PGP Fingerprint: <ExternalLink href="https://kaan.sh/kaanmutlu.asc"><code>ADFE 6659 69BA B089 F1A0 C96E A62A E36C 4EA5 8164</code></ExternalLink>
      </h2>
      { song.playing ? (
        <div className="animate__animated animate__bounceInLeft ">
            <div className="flex space-y-2 items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 w-80 py-2 px-3 h-20 rounded-lg bg-opacity-30 bg-gray-800 border border-gray-900">
            <img src={song.photo} className="w-14 h-14 rounded-lg" />
            <div className="ml-4">
              <h1 className="w-56 truncate font-semibold">Listening to {song.name}</h1>
             <h1 className="w-56 truncate text-sm">by {song.artist} on Spotify</h1>
                </div>
        </div>
          </div>
        </div>
      ) : null }
    </div>
  );
}
