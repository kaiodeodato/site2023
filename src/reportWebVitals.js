const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(webVitals => {
      webVitals.getCLS(onPerfEntry);
      webVitals.getFID(onPerfEntry);
      webVitals.getFCP(onPerfEntry);
      webVitals.getLCP(onPerfEntry);
      webVitals.getTTFB(onPerfEntry);
    }).catch(error => {
      console.error("Falha ao importar o módulo web-vitals", error);
    });
  }
};

export default reportWebVitals;