const submissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
  });
  const Submission = mongoose.model('Submission', submissionSchema);