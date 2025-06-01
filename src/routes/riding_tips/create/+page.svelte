<script>
    import { enhance } from "$app/forms";
</script>

<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <a href="/riding_tips">← Back</a>
            <h1>Add a Tip!</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-6 col-sm-3">
            <form class="needs-validation" method="POST" use:enhance>
                <div class="col">
                    <label class="form-label w-50">
                        Manoeuver<br />
                        <input
                            class="form-control"
                            type="text"
                            name="manoeuver"
                            required
                        />
                    </label>
                    <br />
                </div>

                <div class="col-6">
                    <label for="experience_level" class="form-label"
                        >Experience Level</label
                    ><br />
                    <select id="experience_level" name="experience_level" class="form-control">
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="All Levels">All Levels</option>
                    </select>
                    <br />
                </div>

                <div class="col">
                    <label class="form-label w-50">
                        Tip<br />
                        <input
                            class="form-control"
                            type="text"
                            name="tip"
                            required
                        />
                    </label>
                    <br />
                </div>
                <div class="col">
                    <label class="form-label w-50">
                        Maintainance Tips<br />
                        <input
                            class="form-control"
                            type="text"
                            name="maintenance_tips"
                            required
                        />
                    </label>
                    <br />
                </div>

                <div class="col">
                    <label class="form-label w-50">
                        Description<br />
                        <input
                            class="form-control"
                            type="text"
                            name="description"
                            required
                        />
                    </label>
                    <br />
                </div>

                <div class="col-3">
                    <label for="safety_gear" class="form-label">Safety Gear</label>
                    <select
                        class="form-control"
                        id="safety_gear"
                        name="safety_gear"
                        size="4"
                        multiple
                    >
                        <option value="Helmet">Helmet</option>
                        <option value="Gloves">Gloves</option>
                        <option value="Jacket">Jacket</option>
                        <option value="Pants">Pants</option>
                        <option value="Boots">Boots</option>
                        <option value="Eye Protection">Eye Protection</option>
                    </select>
                </div>

                <div class="py-4 col-6">
                    <button class="w-100 btn btn-primary btn-lg" type="submit"
                        >Add Tip</button
                    >
                </div>
            </form>
        </div>
    </div>
</div>
