export type TechnologyDiscipline = 'web' | 'game' | 'security';
export type Technology = { id: string; name: string; discipline: TechnologyDiscipline; icon: string; source: string };

// Illustrative technology references, not claims of verified proficiency.
export const technologies = [
  {
    "id": "html5",
    "name": "HTML5",
    "discipline": "web",
    "icon": "/technology-icons/html5.svg",
    "source": "Simple Icons"
  },
  {
    "id": "css3",
    "name": "CSS3",
    "discipline": "web",
    "icon": "/technology-icons/css3.svg",
    "source": "Devicon"
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "discipline": "web",
    "icon": "/technology-icons/javascript.svg",
    "source": "Simple Icons"
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "discipline": "web",
    "icon": "/technology-icons/typescript.svg",
    "source": "Simple Icons"
  },
  {
    "id": "react",
    "name": "React",
    "discipline": "web",
    "icon": "/technology-icons/react.svg",
    "source": "Simple Icons"
  },
  {
    "id": "nextdotjs",
    "name": "Next.js",
    "discipline": "web",
    "icon": "/technology-icons/nextdotjs.svg",
    "source": "Simple Icons"
  },
  {
    "id": "vuedotjs",
    "name": "Vue.js",
    "discipline": "web",
    "icon": "/technology-icons/vuedotjs.svg",
    "source": "Simple Icons"
  },
  {
    "id": "angular",
    "name": "Angular",
    "discipline": "web",
    "icon": "/technology-icons/angular.svg",
    "source": "Simple Icons"
  },
  {
    "id": "nodedotjs",
    "name": "Node.js",
    "discipline": "web",
    "icon": "/technology-icons/nodedotjs.svg",
    "source": "Simple Icons"
  },
  {
    "id": "php",
    "name": "PHP",
    "discipline": "web",
    "icon": "/technology-icons/php.svg",
    "source": "Simple Icons"
  },
  {
    "id": "postgresql",
    "name": "PostgreSQL",
    "discipline": "web",
    "icon": "/technology-icons/postgresql.svg",
    "source": "Simple Icons"
  },
  {
    "id": "tailwindcss",
    "name": "Tailwind CSS",
    "discipline": "web",
    "icon": "/technology-icons/tailwindcss.svg",
    "source": "Simple Icons"
  },
  {
    "id": "c",
    "name": "C",
    "discipline": "game",
    "icon": "/technology-icons/c.svg",
    "source": "Simple Icons"
  },
  {
    "id": "cplusplus",
    "name": "C++",
    "discipline": "game",
    "icon": "/technology-icons/cplusplus.svg",
    "source": "Simple Icons"
  },
  {
    "id": "csharp",
    "name": "C#",
    "discipline": "game",
    "icon": "/technology-icons/csharp.svg",
    "source": "Devicon"
  },
  {
    "id": "java",
    "name": "Java",
    "discipline": "game",
    "icon": "/technology-icons/java.svg",
    "source": "Devicon"
  },
  {
    "id": "lua",
    "name": "Lua",
    "discipline": "game",
    "icon": "/technology-icons/lua.svg",
    "source": "Simple Icons"
  },
  {
    "id": "rust",
    "name": "Rust",
    "discipline": "game",
    "icon": "/technology-icons/rust.svg",
    "source": "Simple Icons"
  },
  {
    "id": "unity",
    "name": "Unity",
    "discipline": "game",
    "icon": "/technology-icons/unity.svg",
    "source": "Simple Icons"
  },
  {
    "id": "unrealengine",
    "name": "Unreal Engine",
    "discipline": "game",
    "icon": "/technology-icons/unrealengine.svg",
    "source": "Simple Icons"
  },
  {
    "id": "godotengine",
    "name": "Godot",
    "discipline": "game",
    "icon": "/technology-icons/godotengine.svg",
    "source": "Simple Icons"
  },
  {
    "id": "blender",
    "name": "Blender",
    "discipline": "game",
    "icon": "/technology-icons/blender.svg",
    "source": "Simple Icons"
  },
  {
    "id": "opengl",
    "name": "OpenGL",
    "discipline": "game",
    "icon": "/technology-icons/opengl.svg",
    "source": "Simple Icons"
  },
  {
    "id": "webgl",
    "name": "WebGL",
    "discipline": "game",
    "icon": "/technology-icons/webgl.svg",
    "source": "Simple Icons"
  },
  {
    "id": "python",
    "name": "Python",
    "discipline": "security",
    "icon": "/technology-icons/python.svg",
    "source": "Simple Icons"
  },
  {
    "id": "gnubash",
    "name": "Bash",
    "discipline": "security",
    "icon": "/technology-icons/gnubash.svg",
    "source": "Simple Icons"
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "discipline": "security",
    "icon": "/technology-icons/powershell.svg",
    "source": "Devicon"
  },
  {
    "id": "linux",
    "name": "Linux",
    "discipline": "security",
    "icon": "/technology-icons/linux.svg",
    "source": "Simple Icons"
  },
  {
    "id": "kalilinux",
    "name": "Kali Linux",
    "discipline": "security",
    "icon": "/technology-icons/kalilinux.svg",
    "source": "Simple Icons"
  },
  {
    "id": "wireshark",
    "name": "Wireshark",
    "discipline": "security",
    "icon": "/technology-icons/wireshark.svg",
    "source": "Simple Icons"
  },
  {
    "id": "burpsuite",
    "name": "Burp Suite",
    "discipline": "security",
    "icon": "/technology-icons/burpsuite.svg",
    "source": "Simple Icons"
  },
  {
    "id": "metasploit",
    "name": "Metasploit",
    "discipline": "security",
    "icon": "/technology-icons/metasploit.svg",
    "source": "Simple Icons"
  },
  {
    "id": "zap",
    "name": "ZAP",
    "discipline": "security",
    "icon": "/technology-icons/zap.svg",
    "source": "Simple Icons"
  },
  {
    "id": "docker",
    "name": "Docker",
    "discipline": "security",
    "icon": "/technology-icons/docker.svg",
    "source": "Simple Icons"
  },
  {
    "id": "git",
    "name": "Git",
    "discipline": "security",
    "icon": "/technology-icons/git.svg",
    "source": "Simple Icons"
  },
  {
    "id": "postman",
    "name": "Postman",
    "discipline": "security",
    "icon": "/technology-icons/postman.svg",
    "source": "Simple Icons"
  }
] satisfies Technology[];

export const technologyDisciplines = [
  { id: 'all', label: 'All technologies' },
  { id: 'web', label: 'Web development' },
  { id: 'game', label: 'Game development' },
  { id: 'security', label: 'Cybersecurity' },
] as const;
