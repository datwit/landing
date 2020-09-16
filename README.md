# landing-page
Landing page for site

## install
- Clone this repo
- Download [Hugo stand alone](https://github.com/gohugoio/hugo/releases/download/v0.62.2/hugo_extended_0.62.2_Linux-64bit.tar.gz)
- Extract **hugo** executable and ensure execute permission (**chmod +x hugo**)
- As ***sudo***/***root*** Copy **hugo** executable to **/usr/local/bin/** 
- Move to repository base directory
- For debug execute: **hugo serve**
- For production ready static content generation exceute: **hugo --minify**
    - ready to publish static content can be found inside ***/public*** directory 

## Contact form handler

To use the contact-form you need to set the environment variables:

- `CONTACT-MANAGER-ENDPOINT`: endpoint to the backend
- `CONTACT-MANAGER-CLIENT`: client java script part

See [datwit/contact-form-manager](https://github.com/datwit/contact-form-manager/blob/master/README.md) README.md for details.

## screenshot

![](site.png)
