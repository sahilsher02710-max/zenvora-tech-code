import { darkTheme, lightTheme } from '../../styles/theme';

const jobs = [
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "Zenvora Tech",
    salary: "₹12LPA",
    location: "Bangalore, India",
    logo: "/logo.png",
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    company: "Zenvora Tech",
    salary: "₹18LPA",
    location: "Hyderabad, India",
    logo: "/logo.png",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Zenvora Tech",
    salary: "₹10LPA",
    location: "Pune, India",
    logo: "/logo.png",
  },
  {
    id: 4,
    title: "Frontend React Developer",
    company: "Zenvora Tech",
    salary: "₹11LPA",
    location: "Chennai, India",
    logo: "/logo.png",
  },
  {
    id: 5,
    title: "Backend Node.js Engineer",
    company: "Zenvora Tech",
    salary: "₹14LPA",
    location: "Noida, India",
    logo: "/logo.png",
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "Zenvora Tech",
    salary: "₹8LPA",
    location: "Mumbai, India",
    logo: "/logo.png",
  },
  {
    id: 7,
    title: "HR Manager",
    company: "Zenvora Tech",
    salary: "₹9LPA",
    location: "Delhi, India",
    logo: "/logo.png",
  },
  {
    id: 8,
    title: "AI Research Intern",
    company: "Zenvora Tech",
    salary: "₹35K/month",
    location: "Remote, India",
    logo: "/logo.png",
  },
  {
    id: 9,
    title: "Full Stack Intern",
    company: "Zenvora Tech",
    salary: "₹30K/month",
    location: "Remote, India",
    logo: "/logo.png",
  },
  {
    id: 10,
    title: "DevOps Engineer",
    company: "Zenvora Tech",
    salary: "₹15LPA",
    location: "Gurgaon, India",
    logo: "/logo.png",
  },
  {
    id: 11,
    title: "Product Manager",
    company: "Zenvora Tech",
    salary: "₹20LPA",
    location: "Bangalore, India",
    logo: "/logo.png",
  },
  {
    id: 12,
    title: "Graphic Designer",
    company: "Zenvora Tech",
    salary: "₹7LPA",
    location: "Ahmedabad, India",
    logo: "/logo.png",
  },
];





export const JobRecommendations = () => {
  // Choose which theme to use (you can make this dynamic with useState)
  const theme = darkTheme; // or lightTheme

  return (
    <div className={`min-h-screen relative overflow-hidden px-6 py-14 ${theme.page}`}>
      {/* Background Glow Effects */}
      <div className={`absolute -top-32 -left-32 h-80 w-80 rounded-full ${theme.blur1} blur-3xl`} />
      <div className={`absolute -bottom-32 -right-32 h-80 w-80 rounded-full ${theme.blur2} blur-3xl`} />

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`group rounded-[28px] overflow-hidden border ${theme.card} backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40`}
          >
            {/* Top */}
            <div className={`p-6 h-270px flex flex-col justify-between ${theme.featureCard}`}>
              
              {/* Salary + Bookmark */}
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${theme.label}`}>
                  {job.salary}
                </span>

                <button className={`h-10 w-10 rounded-xl border transition ${theme.toggleBtn}`}>
                  ☆
                </button>
              </div>

              {/* Title */}
              <div>
                <h2 className={`text-[34px] leading-[1.1] font-bold ${theme.heading}`}>
                  {job.title}
                </h2>

                <div className="flex justify-end mt-7">
                  <button className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 text-white text-xl shadow-lg shadow-violet-500/20 transition group-hover:translate-x-1">
                    →
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center">
                <span className={`tracking-[8px] ${theme.subtext}`}>
                  •••
                </span>
              </div>
            </div>

            {/* Bottom */}
            <div className={`border-t ${theme.featureCard} px-5 py-4 flex items-center justify-between`}>
              
              {/* Company */}
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-white flex items-center justify-center p-2">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className={`text-sm font-semibold ${theme.heading}`}>
                    {job.company}
                  </h3>

                  <p className={`text-xs ${theme.subtext}`}>
                    {job.location}
                  </p>
                </div>
              </div>

              {/* View Button */}
              <button className="rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-md shadow-violet-500/20 transition hover:opacity-90">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};