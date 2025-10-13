// src/themes/cleaning/components/CleaningAboutUs.tsx
import React, { useEffect, useState } from 'react';
import { httpFile } from '../../../config.js';
import CleaningLoader from '../components/CleaningLoader';
import DynamicIcon from '../../../extras/DynamicIcon.js';
import { getProjectId } from '../../../hooks/getProjectId'; // Import the utility

interface Stat {
  serialno: number;
  iconName: string;
  value: string;
  label: string;
}

const sanitize = (raw: any): string =>
  typeof raw === 'string'
    ? raw.trim().replace(/^[,\s"]+|[,\s"]+$/g, '')
    : '';

const CleaningAboutUs: React.FC = () => {
  const [aboutImage, setAboutImage] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [stats, setStats] = useState<Stat[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Read projectId from query or localStorage
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get('siteId');
  if (site && localStorage.getItem('currentSiteId') !== site) {
    localStorage.setItem('currentSiteId', site);
  }
const [projectId, setProjectId] = useState(null); // Initialize as null

useEffect(() => {
    // Get projectId from utility function
    const id = getProjectId();

    console.log(id, "this is id")
    setProjectId(id); // Set projectId in state
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await httpFile.post('/webapp/v1/my_site', {
          projectId,
          pageType: 'home',
          reqFrom: 'Aboutus',
        });

        const info = data.projectInfo || {};
        const about = data.aboutUs || {};

        setProjectCategory(info.serviceType || '');
        setProjectDescription(info.description || '');
        setAboutImage((info.images?.[0]?.url as string) || '');

        const fetchedStats: Stat[] = (info.statsSection || []).map((s: any) => ({
          serialno: s.serialno,
          iconName: sanitize(s.iconName),
          value: sanitize(s.value),
          label: sanitize(s.label),
        }));
        setStats(fetchedStats);
      } catch (err) {
        console.error('Error fetching About Us data:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [projectId]);

  // Split projectDescription into two parts
  const descriptionParts = projectDescription.split(/(?<=[.?!])\s+/); // splits by sentence endings
  const firstPart = descriptionParts.slice(0, 2).join(' ');
  const secondPart = descriptionParts.slice(2).join(' ');


  if (isLoading) return <CleaningLoader />;

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Professional {projectCategory} Solutions You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {firstPart}
            </p>
            {secondPart && (
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {secondPart}
              </p>
            )}


            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.serialno} className="text-center">
                  <div className="mb-2 flex justify-center text-emerald-600">
                    <DynamicIcon
                      iconName={stat.iconName}
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {aboutImage && (
              <img
                src={aboutImage}
                alt="Professional cleaners at work"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            )}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <DynamicIcon
                    iconName="Shield"
                    className="w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    Bonded &amp; Insured
                  </div>
                  <div className="text-gray-600 text-sm">
                    Your Property Protected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningAboutUs;
