export class Version {
  constructor(public major: number, public minor: number, public patch: number) {}

  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }

  static fromString(version: string) {
    const [major, minor, patch] = version.split('.').map(Number);
    return new Version(major, minor, patch);
  }
}

export function compareVersions(a: Version, b: Version) {
  if (a.major !== b.major) {
    return a.major - b.major;
  }

  if (a.minor !== b.minor) {
    return a.minor - b.minor;
  }

  return a.patch - b.patch;
}
