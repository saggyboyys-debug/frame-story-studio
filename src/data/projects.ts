export interface Project {
  id: number;
  title: string;
  artist: string;
  category: string;
  year: string;
  youtubeId: string;
  thumbnail: string;
}

export const projects: Project[] = [
  { id: 1, title: "Candle Dinner", artist: "Sabi Yara ft. Gaganvir & Precioustatic", category: "Music Videos", year: "2026", youtubeId: "Kf1IE7YSVFw", thumbnail: "https://img.youtube.com/vi/Kf1IE7YSVFw/maxresdefault.jpg" },
  { id: 2, title: "Amli Di Chah", artist: "Raman Rana ft. Purvi Kaur", category: "Music Videos", year: "2025", youtubeId: "SicAyTVJIXQ", thumbnail: "https://img.youtube.com/vi/SicAyTVJIXQ/maxresdefault.jpg" },
  { id: 3, title: "Jazbati", artist: "Amarinder", category: "Music Videos", year: "2025", youtubeId: "solNWVj3b6w", thumbnail: "https://img.youtube.com/vi/solNWVj3b6w/maxresdefault.jpg" },
  { id: 4, title: "Glock", artist: "Inderjit Ramgahria ft. Zorawerr", category: "Music Videos", year: "2025", youtubeId: "_0enLMVAIFg", thumbnail: "https://img.youtube.com/vi/_0enLMVAIFg/maxresdefault.jpg" },
  { id: 5, title: "Door", artist: "Inderjit Ramgahria ft. Riya Sharma", category: "Music Videos", year: "2025", youtubeId: "Q1hY_jHZw7Y", thumbnail: "https://img.youtube.com/vi/Q1hY_jHZw7Y/maxresdefault.jpg" },
  { id: 6, title: "Haryana Te Punjab", artist: "Bhallwaan ft. Shxkil & Rana Meet", category: "Rap", year: "2025", youtubeId: "gJn_XcB11Qc", thumbnail: "https://img.youtube.com/vi/gJn_XcB11Qc/maxresdefault.jpg" },
  { id: 7, title: "Safar", artist: "Inderjit Ramgahria", category: "Rap", year: "2024", youtubeId: "dfZ2DA94c8I", thumbnail: "https://img.youtube.com/vi/dfZ2DA94c8I/maxresdefault.jpg" },
  { id: 8, title: "Na Billo", artist: "Harry Kahlon ft. G Noor", category: "Music Videos", year: "2024", youtubeId: "aI-YK3flnc4", thumbnail: "https://img.youtube.com/vi/aI-YK3flnc4/maxresdefault.jpg" },
  { id: 9, title: "White Gold", artist: "Rabbi Maan ft. Harf Kaur", category: "Music Videos", year: "2023", youtubeId: "2F-eU5TkMY8", thumbnail: "https://img.youtube.com/vi/2F-eU5TkMY8/maxresdefault.jpg" },
];
