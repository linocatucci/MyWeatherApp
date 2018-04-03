import { Profile } from './profile';

export class ProfileService {
  private profiles: Profile[] = [
    new Profile('default profile', ['New York', 'Calgary', 'Fernie'])
  ];

  saveNewProfile(cities: string[]) {
    const profileName = 'Profile' + this.profiles.length;
    const profile = new Profile(profileName, cities);
    this.profiles.push(profile);
  }

  deleteProfile() {

  }

  getProfiles() {
    return this.profiles;
  }
}
