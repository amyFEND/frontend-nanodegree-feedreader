/* $() function created to verify only tests run
 * after DOM is ready, since some of these tests
 * may require DOM elements.
 */
 $(function() {

    /* FIRST TEST SUITE - RSS feeds definitions */
    describe('RSS Feeds', function() {

      /* First test - validates allFeeds variable is defined and not empty. */
      it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
      });

      /* Second test - validates allFeeds URL is defined and not empty. */
      it('URL defined', function () {
        for(let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        }
      });

      /* Third test - validates allFeeds name is defined and not empty. */
      it('name defined', function() {
        for(let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        }
      });
    });


    /* SECOND TEST SUITE - the menu element */
    describe('The menu', function() {

      /* First test - validates menu element is hidden */
      it('is hidden', function() {
        const body = $('body');
        expect(body.hasClass('menu-hidden')).toBe(true);
      });

      /* Second test - validates menu element changes visibility on click */
      it('toggles on and off', function() {
        const body = $('body');
        const menu = $('.menu-icon-link');

        menu.click();
        expect(body.hasClass('menu-hidden')).toBe(false);
        menu.click();
        expect(body.hasClass('menu-hidden')).toBe(true);
      });
    });


    /* THIRD TEST SUITE - Initial Entries */
    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, done);
      });

      /* First test - validates min of 1 .entry element when loadFeed is done */
      it('completes work', function() {
        const entry = $('.feed').children();

        expect(entry.length).toBeGreaterThan(0);
      });
    });


    /* FOURTH TEST SUITE - New Feed Selection */
    describe('New Feed Selection', function() {
      let firstEntry;
      let secondEntry;

      /* Loads two feeds to validate feeds load their respective content */
      beforeEach(function(done) {
        const entry = $('.feed').children()[0];
        loadFeed(0);
        firstEntry = entry.innerText;
        done();
      });
      afterEach(function(done) {
        const entry = $('.feed').children()[0];
        loadFeed(1);
        secondEntry = entry.innerText;
        done();
      });

      /* First test - validates new feed is loaded with correct content */
      it('content changes', function(done) {
        expect(firstEntry).not.toEqual(secondEntry);
        done();
      });
    });
}());
