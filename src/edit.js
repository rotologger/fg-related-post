import { useBlockProps } from "@wordpress/block-editor";
import { RadioControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
  const { postType } = attributes;

  return (
    <div {...useBlockProps()}>
      <h2>FG Related Post</h2>
      <p>
        {__(
          "Show a post which is related to the currently displayed post or page",
          "fg-related-post"
        )}
      </p>
      <RadioControl
        label={__("Post Type", "fg-related-post")}
        help={__("Select related post type", "fg-related-post")}
        selected={postType}
        options={[
          {
            label: __("Sauce", "fg-related-post"),
            value: "sauce",
          },
          {
            label: __("Recipe", "fg-related-post"),
            value: "rezept",
          },
        ]}
        onChange={(postType) => setAttributes({ postType })}
      />
    </div>
  );
}
