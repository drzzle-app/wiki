# Adding Domains

Domains are added on a per site basis and you can add as many as you like. To add one, you will need to open the site's basic website settings from the Admin Panel.

## Purchasing
Follow these steps to purchase a domain name

1) Click on the "Add Domain" button from the site's "Domains" tab.
![Droplets](./purchase-domain-step-1.png)

2) Click on the "Purchasing New" button.
![Droplets](./purchase-domain-step-2.png)

3) Search for the domain you would like to buy. Here you can see if it is available for purchase.
![Droplets](./purchase-domain-step-3.png)

4) Finally, once you find a domain available for purchase, just select the amount of years you would like it for then click purchase.

## Domain Contact Information
By default, if you purchase a domain through our application, the registrant contact information is our information, however we
can change this to your contact information for you at your request. Here is what that looks like:
```
Address: 3918 Clark Ave. PO Box 23392
City: San Antonio
Contact Type: COMPANY
Country: US
Email: admin@drzzle.com
First Name: Drzzle
LastName: LLC
OrganizationName: Drzzle
State: TX
Zip Code: 78223
```

## Pre-Owned
If you already own a domain, there are 2 ways to add it to your site. See below for step by steps for both methods.

### Point your name servers to Drzzle's
The first method is to point your domain's name servers to ours. We highly recommend this method because of the way our backend is setup. We use Amazon Web Services's Route53 domains in conjunction with CloudFront and there is a special DNS record route53 uses to alias to your site's CloudFront distribution. What this means is that you can safely have your records setup without interrupting any other services you may use in the future with your domain (like email). Doing this also allows you to control DNS records within our control panel. The only caveat is that AWS charges a small monthly fee for this.

Steps:

1) Click on the "Add Domain" button from the site's "Domains" tab.
![Droplets](./purchase-domain-step-1.png)

2) Click on "Yes I want to point"
![Droplets](./owned-m1-step-2.png)

3) Enter your domain name without any subdomain/www. For example: ```mydomain.com```. Then click "Add".
![Droplets](./owned-m1-step-3.png)

4) After clicking add from the previous step, you'll see a set of name servers which you'll then need to go and set at the registrar where you bought your domain. Contact your registrar if you need assistance.


### Keep your name servers
The second method is best suited for those that do not want to pay the small monthly fee for the domain or do not plan on using your domain for other services. The caveat here is that you will need to manage your DNS records yourself.

1) Click on the "Add Domain" button from the site's "Domains" tab.
![Droplets](./purchase-domain-step-1.png)

2) Click on "No I want to leave it"
![Droplets](./owned-m2-step-2.png)

3) Enter your domain name without any subdomain/www. For example: ```mydomain.com```. Then click "Add".
![Droplets](./owned-m2-step-3.png)

4) Finally, you will need to set a CNAME record for your domain at your registrar to the value that Drzzle gives you in this step.
![Droplets](./owned-m2-step-4.png)

As this method means that you will be editing your DNS records on your own, there are a few things to keep in mind. Depending on your domain's TTL, changes can take effect from anywhere between 5 minutes to several days. If your domain is using a service like email, a CNAME record will likely disrupt it. Having your domain not managed in our panel also disallows our support to assist in setting up records for you.
