$(function() {

    describe('RSS Feeds', function() {

      it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
      });

      it('URL defined', function () {
        for(let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        }
      });

      it('name defined', function() {
        for(let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        }
      });
    });


    describe('The menu', function() {

      it('is hidden', function() {
        const body = document.querySelector('body');
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });

      it('toggles on and off', function() {
        const body = document.querySelector('body');
        const menu = document.querySelector('.menu-icon-link');

        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(false);
        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });
    });


    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, done);
      });

      it('completes work', function() {
        const feed = document.querySelector('.feed');

        expect(feed.children.length > 0).toBe(true);
      });
    });


    describe('New Feed Selection', function() {
      const feed = document.querySelector('.feed');
      const firstFeed = [];

      beforeEach(function(done) {
        loadFeed(0);
        Array.from(feed.children).forEach(function(entry) {
          firstFeed.push(entry.innerText);
        });
        loadFeed(1, done);
      });

      it('content changes', function() {
        Array.from(feed.children).forEach(function(entry, index) {
          expect(entry.innerText !== firstFeed[index]).toBe(true);
        });
      });
    });
}());
