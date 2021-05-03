# Demo

https://biljana-zobenica.github.io/

# Agency Jekyll Theme

![screenshot](https://raw.githubusercontent.com/raviriley/agency-jekyll-theme/master/screenshot.PNG)

This is the [Agency Bootstrap theme](https://startbootstrap.com/themes/agency/) converted to a gem-based Jekyll theme with GitHub Pages support, which includes:

- GitHub Pages support
- contact form functionality powered by [Formspree.io](https://formspree.io)
- custom pages
- 404 page
- Google Analytics support
- Markdown support
- custom images
- logo support (instead of just title text)
- automatically updating copyright years
- custom navigation bar, even without the header image(s)
- customizable footer
- custom accent color and dark/light colors
- horizontal scrolling support for client section

The Jekyll structure of this theme includes:

- `_portfolio` files - what generate the portfolio grid. YAML front matter handles all the details
- the `page` layout allows custom pages, as seen in the legal and 404 pages
- `sitetext.yml` enables complete customization of all site text
- `navigation.yml` enables fully customizable navigation
- `style.yml` enables fully customizable colors, background images, and other style-related things

## Installation
There are three ways to install this theme:
1. As a gem-based theme
2. Use the [starter template][template]  (best for GitHub Pages)
3. As a remote theme

#### 1. Gem-based Theme Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-agency"
```

Then, replace the contents of your `_config.yml` file with [this](https://github.com/raviriley/agency-jekyll-theme/blob/master/_config.yml).

And then execute:

    $ bundle

Or, install it yourself as:

    $ gem install jekyll-agency

#### 2. Using the [Starter Template][template]
This is the fastest and easiest way to get up and running on GitHub Pages.
Simply generate your own repository by clicking the button below, then replace the sample content with your own and configure for your needs.

[![template button](https://img.shields.io/badge/-Create%20repository%20from%20template-brightgreen)](https://github.com/raviriley/agency-jekyll-theme-starter/generate)

#### 3. Remote Theme Installation

Replace the contents of your `_config.yml` file with [this](https://raw.githubusercontent.com/raviriley/agency-jekyll-theme-starter/master/_config.yml) and your `Gemfile` with [this](https://raw.githubusercontent.com/raviriley/agency-jekyll-theme-starter/master/Gemfile). Then execute:

    $ bundle


[template]: https://github.com/raviriley/agency-jekyll-theme-starter


## Development

To set up your environment to develop this theme, [clone this repo](https://github.com/raviriley/agency-jekyll-theme.git), then run `bundle install`. To test the theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. Add pages, documents, data, etc. like normal to test the theme's contents. As you make modifications, your site will regenerate and you should see the changes in the browser after a refresh.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

<!--

## Example Implementations

- [CV Enterprises](https://cventerprises.org)
- [Mortazavi Lab at UC Irvine](https://mortazavilab.github.io/)

-->
