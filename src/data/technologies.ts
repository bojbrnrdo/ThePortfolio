export type TechnologyDiscipline = 'web' | 'game' | 'security';
export type Technology = { id: string; name: string; discipline: TechnologyDiscipline; icon: string; card: string; source: string };

// Illustrative technology references, not claims of verified proficiency.
export const technologies = [
  {
    "id": "html5",
    "name": "HTML5",
    "discipline": "web",
    "icon": "/technology-icons/html5.svg",
    "card": "/technology-icons/html5-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "css3",
    "name": "CSS3",
    "discipline": "web",
    "icon": "/technology-icons/css3.svg",
    "card": "/technology-icons/css3-card.svg",
    "source": "Devicon"
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "discipline": "web",
    "icon": "/technology-icons/javascript.svg",
    "card": "/technology-icons/javascript-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "discipline": "web",
    "icon": "/technology-icons/typescript.svg",
    "card": "/technology-icons/typescript-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "react",
    "name": "React",
    "discipline": "web",
    "icon": "/technology-icons/react.svg",
    "card": "/technology-icons/react-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "nextdotjs",
    "name": "Next.js",
    "discipline": "web",
    "icon": "/technology-icons/nextdotjs.svg",
    "card": "/technology-icons/nextdotjs-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "vuedotjs",
    "name": "Vue.js",
    "discipline": "web",
    "icon": "/technology-icons/vuedotjs.svg",
    "card": "/technology-icons/vuedotjs-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "angular",
    "name": "Angular",
    "discipline": "web",
    "icon": "/technology-icons/angular.svg",
    "card": "/technology-icons/angular-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "nodedotjs",
    "name": "Node.js",
    "discipline": "web",
    "icon": "/technology-icons/nodedotjs.svg",
    "card": "/technology-icons/nodedotjs-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "php",
    "name": "PHP",
    "discipline": "web",
    "icon": "/technology-icons/php.svg",
    "card": "/technology-icons/php-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "postgresql",
    "name": "PostgreSQL",
    "discipline": "web",
    "icon": "/technology-icons/postgresql.svg",
    "card": "/technology-icons/postgresql-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "tailwindcss",
    "name": "Tailwind CSS",
    "discipline": "web",
    "icon": "/technology-icons/tailwindcss.svg",
    "card": "/technology-icons/tailwindcss-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "c",
    "name": "C",
    "discipline": "game",
    "icon": "/technology-icons/c.svg",
    "card": "/technology-icons/c-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "cplusplus",
    "name": "C++",
    "discipline": "game",
    "icon": "/technology-icons/cplusplus.svg",
    "card": "/technology-icons/cplusplus-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "csharp",
    "name": "C#",
    "discipline": "game",
    "icon": "/technology-icons/csharp.svg",
    "card": "/technology-icons/csharp-card.svg",
    "source": "Devicon"
  },
  {
    "id": "java",
    "name": "Java",
    "discipline": "game",
    "icon": "/technology-icons/java.svg",
    "card": "/technology-icons/java-card.svg",
    "source": "Devicon"
  },
  {
    "id": "lua",
    "name": "Lua",
    "discipline": "game",
    "icon": "/technology-icons/lua.svg",
    "card": "/technology-icons/lua-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "rust",
    "name": "Rust",
    "discipline": "game",
    "icon": "/technology-icons/rust.svg",
    "card": "/technology-icons/rust-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "unity",
    "name": "Unity",
    "discipline": "game",
    "icon": "/technology-icons/unity.svg",
    "card": "/technology-icons/unity-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "unrealengine",
    "name": "Unreal Engine",
    "discipline": "game",
    "icon": "/technology-icons/unrealengine.svg",
    "card": "/technology-icons/unrealengine-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "godotengine",
    "name": "Godot",
    "discipline": "game",
    "icon": "/technology-icons/godotengine.svg",
    "card": "/technology-icons/godotengine-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "blender",
    "name": "Blender",
    "discipline": "game",
    "icon": "/technology-icons/blender.svg",
    "card": "/technology-icons/blender-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "opengl",
    "name": "OpenGL",
    "discipline": "game",
    "icon": "/technology-icons/opengl.svg",
    "card": "/technology-icons/opengl-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "webgl",
    "name": "WebGL",
    "discipline": "game",
    "icon": "/technology-icons/webgl.svg",
    "card": "/technology-icons/webgl-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "python",
    "name": "Python",
    "discipline": "security",
    "icon": "/technology-icons/python.svg",
    "card": "/technology-icons/python-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "gnubash",
    "name": "Bash",
    "discipline": "security",
    "icon": "/technology-icons/gnubash.svg",
    "card": "/technology-icons/gnubash-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "discipline": "security",
    "icon": "/technology-icons/powershell.svg",
    "card": "/technology-icons/powershell-card.svg",
    "source": "Devicon"
  },
  {
    "id": "linux",
    "name": "Linux",
    "discipline": "security",
    "icon": "/technology-icons/linux.svg",
    "card": "/technology-icons/linux-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "kalilinux",
    "name": "Kali Linux",
    "discipline": "security",
    "icon": "/technology-icons/kalilinux.svg",
    "card": "/technology-icons/kalilinux-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "wireshark",
    "name": "Wireshark",
    "discipline": "security",
    "icon": "/technology-icons/wireshark.svg",
    "card": "/technology-icons/wireshark-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "burpsuite",
    "name": "Burp Suite",
    "discipline": "security",
    "icon": "/technology-icons/burpsuite.svg",
    "card": "/technology-icons/burpsuite-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "metasploit",
    "name": "Metasploit",
    "discipline": "security",
    "icon": "/technology-icons/metasploit.svg",
    "card": "/technology-icons/metasploit-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "zap",
    "name": "ZAP",
    "discipline": "security",
    "icon": "/technology-icons/zap.svg",
    "card": "/technology-icons/zap-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "docker",
    "name": "Docker",
    "discipline": "security",
    "icon": "/technology-icons/docker.svg",
    "card": "/technology-icons/docker-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "git",
    "name": "Git",
    "discipline": "security",
    "icon": "/technology-icons/git.svg",
    "card": "/technology-icons/git-card.svg",
    "source": "Simple Icons"
  },
  {
    "id": "postman",
    "name": "Postman",
    "discipline": "security",
    "icon": "/technology-icons/postman.svg",
    "card": "/technology-icons/postman-card.svg",
    "source": "Simple Icons"
  }
] satisfies Technology[];

export const technologyDisciplines = [
  { id: 'all', label: 'All technologies' },
  { id: 'web', label: 'Web development' },
  { id: 'game', label: 'Game development' },
  { id: 'security', label: 'Cybersecurity' },
] as const;
