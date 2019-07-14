const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы первой половины мая 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/addyosmani/status/1128548064287952896">Поддержка font-display в&nbsp;Google Fonts</a></h3>
<p class="paragraph">Эдди Османи сообщает, что теперь Google Fonts поддерживают CSS-свойство font-display: им&nbsp;можно управлять через параметр display в&nbsp;URL подключаемых шрифтов.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://web.dev/hands-on-portals/">Hands-on with Portals: seamless navigations on&nbsp;the Web</a></h3>
<p class="paragraph">Введение в&nbsp;порталы, новый браузерный API для анимирования переходов между страницами.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/">Building the New facebook.com with React, GraphQL and Relay</a></h3>
<p class="paragraph">Доклад инженеров Facebook о&nbsp;технической стороне нового фронтенда соцсети.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/microsoft/react-native-windows">React Native for Windows</a></h3>
<p class="paragraph">Microsoft оживил давний проект, позволяющий разрабатывать приложения для ПК, планшетов и&nbsp;даже Xbox: теперь он&nbsp;переписывается на&nbsp;C++ для лучшей производительности и&nbsp;совместимости с&nbsp;ядром React Native.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/kkuchta/css-only-chat">CSS-only Chat</a></h3>
<p class="paragraph">Реализация полноценного real-time чата без единой строчки JS&nbsp;на&nbsp;клиенте.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html">The new evergreen Googlebot</a></h3>
<p class="paragraph">Поисковый бот Google теперь будет автоматически обновляться и&nbsp;использовать актуальную версию движка Chromium. Это означает, что у&nbsp;сайтов&nbsp;без SSR появилось больше шансов на&nbsp;корректную индексацию Гуглом.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/features/package-registry">GitHub Package Registry</a></h3>
<p class="paragraph">GitHub анонсировал собственный хостинг пакетов с&nbsp;поддержкой NPM, Docker, Maven, NuGet и&nbsp;RubyGems.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://blog.amp.dev/2019/05/01/amp-as-your-web-framework/">AMP as&nbsp;your web framework</a></h3>
<p class="paragraph">Проект Accelerated Mobile Pages переименован в&nbsp;AMP и&nbsp;теперь позиционируется как фреймворк общего назначения на&nbsp;основе веб-компонентов для разработки сайтов, интерактивных публикаций и&nbsp;писем.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="http://blog.csssr.ru/2019/05/07/work-stronger">Стимуляторы работы программиста. Здоровье</a></h3>
<p class="paragraph">Евгений Вецель о&nbsp;том, как повысить производительность и&nbsp;получать от&nbsp;работы больше удовольствия с&nbsp;помощью простых приёмов заботы о&nbsp;собственном здоровье.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://runpkg.com/">runpkg</a></h3>
<p class="paragraph">Инструмент для анализа содержимого NPM-пакетов прямо в&nbsp;браузере, вдохновлённый проектом unpkg.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://eng.uber.com/employing-quic-protocol/">Employing QUIC Protocol to&nbsp;Optimize Uber&rsquo;s App Performance</a></h3>
<p class="paragraph">Инженеры Uber рассказали об&nbsp;опыте перехода на&nbsp;протокол QUIC для решения проблем с&nbsp;сетевыми задержками из-за&nbsp;TCP.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));