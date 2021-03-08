import PageLayout from '../components/PageLayout';
import React from 'react';
import SEO from '../components/Seo';
import cx from 'classnames';
import podcastsHeader from '../images/podcasts/podcasts.jpg';
import styles from './podcasts.module.scss';

const PodcastsPage = () => {
  const podcastIds = ['1225223', '1677727', '1677670'];

  const podcastEmbeds = podcastIds.map((podcastId) => {
    return (
      <section className={cx(styles.section, styles.player)} key={podcastId}>
        <div>
          <iframe
            title="buzzsprout"
            src={`https://www.buzzsprout.com/${podcastId}?client_source=large_player&iframe=true&referrer=https://www.buzzsprout.com/${podcastId}.js?container_id=buzzsprout-large-player-${podcastId}&player=large`}
          />
        </div>
      </section>
    );
  });

  return (
    <>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Podcasts" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div className={styles.bodyText}>
              <p>
                Sometimes we talk on the internet about some things. You
                probably listen to some things on the internet sometimes. We're
                perfect for each other.
              </p>
              <p>
                We're in the process of spinning up a few podcasts to bring you
                all the news, code and pontification that's fit for publication,
                and rather a lot that isn't as well.
              </p>
              <p>
                For the time being we have one podcast, so we're including it
                here for your listening enjoyment.
              </p>
              <p>
                While it may seem silly to start an entire page for podcasts
                when we only have the one (we should really have called it
                'podcast' page), we had to start somewhere.
              </p>
              <p>
                <blockquote>
                  <p>
                    "Omnium rerum principia parva sunt" (All things have small
                    beginnings)
                  </p>
                  <footer>- Marcus Tullius Cicero (106 BC - 43 BC)</footer>
                </blockquote>
              </p>
              <p>
                We hope you enjoy it. If you don't please feel free to{' '}
                <a href="mailto:devrel@newrelic.com">send us mean emails.</a>{' '}
                It's internet tradition.
              </p>
            </div>
            <img
              className={styles.img}
              src={podcastsHeader}
              alt="podcasts header"
            />
          </section>

          {podcastEmbeds}
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

export default PodcastsPage;
