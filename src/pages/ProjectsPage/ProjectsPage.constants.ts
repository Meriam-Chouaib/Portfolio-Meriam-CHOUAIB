import { CustomItemProps } from 'components/CustomItem/CustomItem.type'
import dwirty_3 from 'assets/images/dwirty3.png'
import demoAskDoctors from 'assets/videos/demoAskDoctors.mp4'
import demoStudyRent from 'assets/videos/démo_rapide.mp4'
export const projectItems: CustomItemProps[] = [
  {
    video: demoStudyRent,
    description: 'projects.studyRentDescription',
    title: 'projects.studyRent',
    techStack: ['MERN Stack', 'Redux', 'Google Maps API', 'Socket.io'],
    githubLink: 'https://github.com/Meriam-Chouaib/StudyRentFront',
  },
  {
    video: demoAskDoctors,
    description: 'projects.askDoctorsDescription',
    title: 'projects.askDoctors',
    techStack: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
    githubLink: 'https://github.com/Meriam-Chouaib/AskDoctorsBack',
  },
  {
    imgs: dwirty_3,
    description: 'projects.dwirtyDescription',
    title: 'projects.dwirty',
    techStack: ['React', 'Redux Toolkit', 'PWA', 'Stripe'],
    githubLink: 'https://github.com/Meriam-Chouaib/dwirty',
  },
]
