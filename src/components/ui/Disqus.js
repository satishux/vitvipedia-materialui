import React, { useEffect } from 'react';

const Disqus = ({ url, identifier }) => {
  const disqus_config = () => {
    window.page = {};
    window.page.url = url; // Replace PAGE_URL with your page's canonical URL variable
    window.page.identifier = identifier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  useEffect(() => {
    disqus_config();
    var d = document,
      s = d.createElement('script');
    s.src = 'https://http-localhost-3001-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }, []);

  return (
    <div>
      <div id="disqus_thread"></div>
    </div>
  );
};

export default Disqus;
