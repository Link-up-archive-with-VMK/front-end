import { Helmet } from 'react-helmet-async';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Guiderun Project`}</title>
    </Helmet>
  );
};

export default PageTitle;
