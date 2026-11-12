import { useState, type FormEvent } from "react";
import { Label } from "@/shared/components/ui/label.js";
import { Textarea } from "@/shared/components/ui/textarea.js";
import { Button } from "@/shared/components/ui/button.js";

type EditBioSectionProps = {
  bio: string | null;
  isLoadingUser: boolean;
  editBio: (bio: string) => Promise<void>;
  isEditingBio: boolean;
};

const EditBioSection = ({
  bio,
  isLoadingUser,
  editBio,
  isEditingBio,
}: EditBioSectionProps) => {
  const [bioTextArea, setBioTextArea] = useState(bio ?? "");
  const [bioError, setBioError] = useState<string | null>(null);

  const handleEditBio = async (e: SubmitEvent) => {
    e.preventDefault();
    setBioError(null);
    try {
      await editBio(bioTextArea);
    } catch (error) {
      setBioError(
        error instanceof Error ? error.message : "Unable to update your bio.",
      );
    }
  };

  if (isLoadingUser) {
    return (
      <div className="duckegg-block px-3 py-3">
        <div className="flex flex-col">
          <h3 className="text-shadow-wrap text-lg font-bold">Edit Bio</h3>
          <p>Loading...</p>
          <button
            className="blue-button mt-2 ml-auto px-3 py-1"
            disabled={true}
          >
            Confirm Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleEditBio}>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          placeholder="Tell the community a little about yourself..."
          className="min-h-28 resize-y"
          autoFocus
          name="bio"
          value={bioTextArea}
          onChange={(e) => setBioTextArea(e.target.value)}
          minLength={1}
          maxLength={350}
          required
        />
        <p className="text-xs text-text-secondary">
          A short description of yourself.
        </p>
        {bioError && (
          <p role="alert" className="text-sm text-destructive">
            {bioError}
          </p>
        )}

        <div className="flex justify-end">
          <Button type="submit" disabled={isEditingBio}>
            {isEditingBio ? "Editing..." : "Confirm Edit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export { EditBioSection };
