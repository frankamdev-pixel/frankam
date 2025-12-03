import { useForm, usePage } from '@inertiajs/react';

export default function Edit() {
  const { user } = usePage().props;
  const { data, setData, post, processing } = useForm({
    bio: user.bio || "",
    avatar: null,
  });

  function submit(e) {
    e.preventDefault();
    post(route('profile.update'));
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white/10 rounded-xl backdrop-blur">
      <h1 className="text-xl font-bold text-white mb-4">Mon profil</h1>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="text-white">Bio :</label>
          <textarea
            className="w-full rounded p-2"
            value={data.bio}
            onChange={e => setData('bio', e.target.value)}
          />
        </div>

        <div>
          <label className="text-white">Avatar :</label>
          <input
            type="file"
            accept="image/*"
            onChange={e => setData('avatar', e.target.files[0])}
          />
        </div>

        {user.avatar && (
          <img
            src={`/storage/${user.avatar}`}
            className="w-20 h-20 rounded-full object-cover"
          />
        )}

        <button
          disabled={processing}
          className="bg-emerald-600 px-4 py-2 rounded text-white font-semibold"
        >
          Sauvegarder
        </button>
      </form>
    </div>
  );
}
