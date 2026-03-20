class ProfileWidget extends React.Component {
  state = {
    isVisible: false,
    profile: null
  };
 
  componentDidMount() {
    document.addEventListener("profile-loaded", this.handleLoad);
    this.fetchProfile();
  }
 
  componentWillUnmount() {
    document.removeEventListener("profile-loaded", this.handleLoad);
  }
 
  fetchProfile() {
    fakeApi("/profile").then(data => {
      this.setState({ profile: data });
    });
  }
 
  handleLoad = () => {
    this.setState({ isVisible: true });
  };
 
  render() {
    return this.state.isVisible
      ? `Profile shown: ${this.state.profile?.name}`
      : "Loading...";
  }
}
