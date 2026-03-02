use time::Duration;

fn main() {
    let duration = Duration::seconds(60);
    println!("Duration: {} seconds", duration.whole_seconds());
}
