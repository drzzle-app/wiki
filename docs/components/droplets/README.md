# Droplets

In the site editor, you will notice the droplets tab at the bottom of the screen. Here you can filter and find droplets to add to your pages.

![Droplets tab](./droplets-tab.png)

## Filtering
You can filter droplets in this tab by types (puddles, content blocks and all types) in the top left filter bar. Additionally, you can search for droplets by name in the top right search bar.

![Droplets tab filtering](./droplets-tab-filters.png)

## Adding Droplets

Adding droplets to pages is as easy as dragging and dropping them where you want them. All droplet types can be dropped inside of a section at the very least. Certain droplet types can be dropped in other areas (see [puddles](/components/puddles/#droplets-allowed) and [content blocks](/components/content-blocks/#allowed-targets)).

![Adding droplets](./drop-droplet.gif)

## Editing Droplets

Every droplet, except for general text, has a its own edit bubble where there are controls to style, position and add options for it that are specifically made for the droplet. There are 2 ways to open the edit bubble:

1) The first method is to open the droplet options by hovering over the droplet's drop icon then click the edit button.

![Open droplet bubble option 1](./droplet-bubble-open1.gif)

2) The second method is a shortcut, simply right click on the droplet and the bubble should open.

![Open droplet bubble option 2](./droplet-bubble-open2.gif)

In order to save changes to any updates on your droplets, you need to click the "done" button in the edit bubble then open the save options modal in the top control bar. From there you will need to save the page.

## Rearranging Droplets

To rearrange droplets, open the droplet options by hovering over the drop icon on the droplet. Then click and drag the green move icon.

![rearrange droplets](./droplet-rearrange.gif)

## Recycling Droplets
Recycling a droplet is great for saving time on repetitive tasks. You can edit a droplet to how you want it and choose to save it (as recycled) in that state. You can then create new droplets from that. It's important to note that if you update the original droplet it will not reflect on droplets created from it nor will it update the saved recycled droplet. Think of recycling as a way to copy a droplet.

#### Saving a Droplet
To recycle a droplet, hover over the options for the droplet you want to recycle, enter a name and hit save.

![recycle droplet](./droplet-recycle-1.gif)

#### Loading a Droplet
To load a recycled droplet, you will need to drop a new droplet on the page as normal. The type of droplet needs to be of that which was recycled. You then can hover over the droplet options and click on the recycle button. Click on the "load existing" tab and select the droplet.

![recycle droplet](./droplet-recycle-2.gif)

#### Deleting a Recycled Droplet
Recycled droplets can be seen in the "search pages" modal with pages, templates and drafts. Here you can delete any recycled droplets from your data. It's worth noting that if you delete a recycled droplet, it will not affect any droplets that were made from it.

![recycle droplet](./droplet-recycle-3.gif)

## Deleting Droplets

To delete droplets you will need to open the droplet options by hovering over the drop icon on the droplet then click the red remove button. To save changes, you will also need to open the save options modal from the top control bar and save the page. Bare in mind, when you edit, delete or add droplets in a _template_, every page that uses that template will be updated with those changes.

![remove droplets](./droplet-delete.gif)

## Linkable Droplets

Linkable droplets are droplets that can link to pages or custom links like modal triggers. You can see which droplets are linkable by clicking the filter in the droplets tab.

![linkable droplets](./droplets-linkable.png)

## Modals

Modals are [puddle](/glossary/#puddle) droplets that involve triggers. Modals are hidden on the page and need triggers to be exposed.

![droplet modal example](./modal-final.gif)

See the steps below to learn how to setup a modal on any page.

1. Open the Droplets tab and search for modal

![droplet modal step 1](./modal-step-1.png)

2. Drop the modal anywhere on the page you wish. What you will see is a preview of what the modal will look like when a site visitor opens it. Keep in mind the modal will not look like the preview in the location you drop it. When a visitor triggers it, it should be overlayed over the entire page. Here you can style and configure it as you wish.

![droplet modal step 2](./modal-step-2.png)

3. Drop any allowed droplets into your modal until you get it the way you wish. You can see what other droplets are allowed into the modal by clicking the "Allowed Droplets" helper.

![droplet modal step 3](./modal-step-3.png)

4. There are 2 ways for your site visitors to trigger the modal. One is on page load. To do this all you need to do is select the "Reveal on Page Load" option in the modal settings. For custom triggers, copy the "Modal ID" so you can paste it into a linkable droplet.

![droplet modal step 4](./modal-step-4.png)

5. Select any linkable droplet from the droplets tab or one that's already on the page. You can filter what droplets are linkable in the droplet tab filters. Once you know what droplet you want to use for the trigger (in this case a button), open that droplet's settings then paste the Modal ID into a custom link field.

![droplet modal step 5](./modal-step-5.png)

That's it, you now have a modal on your page!
