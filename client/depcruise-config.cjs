/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
    options: {
      doNotFollow: {
        dependencyTypes: [
          'npm',
          'npm-dev',
          'npm-optional',
          'npm-peer',
          'npm-bundled',
          'npm-no-pkg',
        ],
      },
  
      includeOnly: '^src',
  
      tsPreCompilationDeps: false,
  
  
      /* How to resolve external modules - use "yarn-pnp" if you're using yarn's Plug'n'Play.
         otherwise leave it out (or set to the default, which is 'node_modules')
         externalModuleResolutionStrategy: 'yarn-pnp', // This can be commented
      */
  
      progress: { type: 'performance-log' },
  
      reporterOptions: {
        archi: {
                  collapsePattern:
                      '^src/components/[^/]+',
  
                  theme: {
                      modules: [
                          { criteria: { source: '^src/components/About' }, attributes: { fillcolor: '#FF5733' } },
                          { criteria: { source: '^src/components/Carousel' }, attributes: { fillcolor: '#33FF57' } },
                          { criteria: { source: '^src/components/Catalog' }, attributes: { fillcolor: '#5733FF' } },
                          { criteria: { source: '^src/components/Create' }, attributes: { fillcolor: '#FFD633' } },
                          { criteria: { source: '^src/components/Details' }, attributes: { fillcolor: '#33C4FF' } },
                          { criteria: { source: '^src/components/Edit' }, attributes: { fillcolor: '#FF33C4' } },
                          { criteria: { source: '^src/components/Footer' }, attributes: { fillcolor: '#33FFC4' } },
                          { criteria: { source: '^src/components/Guard' }, attributes: { fillcolor: '#FF5733' } },
                          { criteria: { source: '^src/components/Header' }, attributes: { fillcolor: '#33FF57' } },
                          { criteria: { source: '^src/components/Home' }, attributes: { fillcolor: '#5733FF' } },
                          { criteria: { source: '^src/components/Loader' }, attributes: { fillcolor: '#FFD633' } },
                          { criteria: { source: '^src/components/Login' }, attributes: { fillcolor: '#33C4FF' } },
                          { criteria: { source: '^src/components/NotFound' }, attributes: { fillcolor: '#FF5733' } },
                          { criteria: { source: '^src/components/Profile' }, attributes: { fillcolor: '#33FFC4' } },
                          { criteria: { source: '^src/components/Register' }, attributes: { fillcolor: '#FF5733' } },
                          { criteria: { source: '^src/components/Search' }, attributes: { fillcolor: '#33FF57' } },
                          { criteria: { source: '^src/components/Team' }, attributes: { fillcolor: '#5733FF' } },
                          { criteria: { source: '^src/components/Weather' }, attributes: { fillcolor: '#FFD633' } },
                          { criteria: { source: '^src/contex' }, attributes: { fillcolor: '#33C4FF' } },
                          { criteria: { source: '^src/hooks' }, attributes: { fillcolor: '#f4c300' } },
                          { criteria: { source: '^src/services' }, attributes: { fillcolor: '#33FFC4' } },
                          { criteria: { source: '^src/utils' }, attributes: { fillcolor: '#FFD633' } },
                      ],
            graph: {
              splines: 'ortho',
              rankdir: 'TB',
              ranksep: '1',
            },
          },
        },
      },
    },
  };