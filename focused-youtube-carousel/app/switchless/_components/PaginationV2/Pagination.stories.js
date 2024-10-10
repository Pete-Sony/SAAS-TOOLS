import Pagination from './Pagination';

import PagnationDocs from './Pagination.mdx';

export default {
  title: 'Exported via npm/Styled/Page/Pagination',
  component: Pagination,

  parameters: {
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
          component: PaginationDocs,
      },
    },
  },
};

export const Default = {
  args: {
    pageCount: 10,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    pageCount: 5,
    disabled: true,
  },
};

export const WithCurrentPage = {
  args: {
    pageCount: 10,
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/some-page',
        query: { page: '3' },
      },
    },
  },
};

export const LargePageCount = {
  args: {
    pageCount: 100,
  },
};
export const CustomRouterAndParams = {
  args: {
    pageCount: 10,
    router: {
      push: (url) => console.log('Navigating to:', url),
    },
    searchParams: new URLSearchParams('page=6'),
  },
};

// 

export const SinglePage = {
  args: {
    pageCount: 1,
    disabled: false
  },

  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};